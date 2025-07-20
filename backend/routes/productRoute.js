// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Products.js');

// POST a new product
router.post('/', async (req, res) => {
  const { imageUrl, title, rating, price, originalPrice } = req.body;

  try {
    const newProduct = new Product({
      imageUrl,
      title,
      rating,
      price,
      originalPrice
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;