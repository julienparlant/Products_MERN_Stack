import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/products", async (req, res) => {
  let products;
  try {
    products = await Product.find({});
  } catch (error) {
    console.error("Error fetching products");
    return res.status(500).json({ message: "Server Error" });
  }
  res.status(200).json({ success: true, data: products });
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product");
    return res.status(500).json({ message: "Server Error" });
  }
  res.status(200).json({ success: true, data: product });
});

app.post("/api/products", async (req, res) => {
  const product = req.body; //user input data

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
  } catch (error) {
    console.error("Error creating product");
    return res.status(500).json({ message: "Server Error" });
  }

  res
    .status(201)
    .json({ success: true, message: "Product created", data: newProduct });
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  let product;
  try {
    product = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product");
    return res.status(500).json({ message: "Server Error" });
  }
  res
    .status(200)
    .json({ success: true, message: "Product updated", data: product });
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.remove();
  } catch (error) {
    console.error("Error deleting product");
    return res.status(500).json({ message: "Server Error" });
  }
  res.status(200).json({ success: true, message: "Product deleted" });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server started on http://localhost:3000 ");
});
