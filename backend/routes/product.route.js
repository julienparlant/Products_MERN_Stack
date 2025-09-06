import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req, res) => {
  let products;
  try {
    products = await Product.find({});
  } catch (error) {
    console.error("Error fetching products");
    return res.status(500).json({ message: "Server Error" });
  }
  res.status(200).json({ success: true, data: products });
});

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
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

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Deleting product with id:", id);

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Product not found" });
  }
});

export default router;
