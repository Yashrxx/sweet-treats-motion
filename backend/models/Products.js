// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    type: String,
    required: true
  },
  originalPrice: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);