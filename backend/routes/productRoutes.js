import express from 'express';

import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();
//router.get('/',getProducts());
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
