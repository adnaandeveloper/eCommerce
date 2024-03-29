import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc fetch all products
//@route  Get /api/products
//@access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); // fetching all

  res.json(products);
});

//@desc fetch single product
//@route  Get /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
