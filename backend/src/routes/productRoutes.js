// src/routes/productRoutes.js
import express from 'express';
import {
  addProduct,
  editProduct,
  deleteProduct,
  viewAllProducts,
  viewProductDetails
} from '../controllers/productController.js';

const router = express.Router();

// Add Product
router.post('/', addProduct);

// Edit Product
router.put('/:id', editProduct);

// Delete Product
router.delete('/:id', deleteProduct);

// View All Products
router.get('/', viewAllProducts);

// View Product Details
router.get('/:id', viewProductDetails);

export default router;
