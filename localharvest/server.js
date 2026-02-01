const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const Razorpay = require("razorpay");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
// for testing

// --- DB Connection ---
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ramram",
  database: "localharvest",
});

// --- Razorpay Instance ---
const razorpay = new Razorpay({
  key_id: "rzp_test_1234567890abcdef", // replace with your Razorpay key
  key_secret: "your_razorpay_secret",
});

// --- PRODUCTS ---
app.get("/api/products", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database fetch failed" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    if (!name || !price || !stock)
      return res.status(400).json({ error: "Missing fields" });

    await pool.query(
      "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)",
      [name, price, stock]
    );
    const [rows] = await pool.query("SELECT * FROM products");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Add error:", err);
    res.status(500).json({ error: "Database insert failed" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // connection to handle transaction if possible, or just sequential deletes
    // Delete related orders first
    console.log(`Attempting to delete orders for product_id: ${id}`);
    const [orderResult] = await pool.query("DELETE FROM orders WHERE product_id = ?", [id]);
    console.log(`Deleted ${orderResult.affectedRows} orders`);

    // Then delete the product
    await pool.query("DELETE FROM products WHERE id = ?", [id]);

    const [rows] = await pool.query("SELECT * FROM products");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Database delete failed" });
  }
});

// --- ORDERS ---
app.post("/api/orders", async (req, res) => {
  try {
    const { product_id, product_name, quantity, total_price } = req.body;

    // 1. Check stock
    const [productRows] = await pool.query("SELECT stock FROM products WHERE id = ?", [product_id]);
    if (productRows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    const currentStock = productRows[0].stock;

    if (currentStock < quantity) {
      return res.status(400).json({ error: "Insufficient stock" });
    }

    // 2. Deduct stock
    await pool.query("UPDATE products SET stock = stock - ? WHERE id = ?", [quantity, product_id]);

    // 3. Create Order
    const [result] = await pool.query(
      "INSERT INTO orders (product_id, product_name, quantity, total_price) VALUES (?, ?, ?, ?)",
      [product_id, product_name, quantity, total_price]
    );

    // Return the new order ID so frontend can track it
    res.status(200).json({ success: true, orderId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add order" });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM orders ORDER BY order_date DESC");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// --- CANCEL ORDER (Restore Stock) ---
app.delete("/api/orders/:id", async (req, res) => {
  try {
    const orderId = req.params.id;

    // 1. Get order details to know product and quantity
    const [orderRows] = await pool.query("SELECT product_id, quantity FROM orders WHERE id = ?", [orderId]);
    if (orderRows.length === 0) {
      return res.status(404).json({ error: "Order not found" });
    }
    const { product_id, quantity } = orderRows[0];

    // 2. Restore stock
    await pool.query("UPDATE products SET stock = stock + ? WHERE id = ?", [quantity, product_id]);

    // 3. Delete order
    await pool.query("DELETE FROM orders WHERE id = ?", [orderId]);

    res.status(200).json({ success: true, message: "Order cancelled and stock restored" });
  } catch (error) {
    console.error("Delete order error:", error);
    res.status(500).json({ error: "Failed to delete order" });
  }
});

// --- RAZORPAY ORDER CREATION ---
app.post("/api/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: "receipt#1",
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
