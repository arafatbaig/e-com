import express from 'express';
import { placeOrder, getAllOrders } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', placeOrder);        // Place a new order
router.get('/', getAllOrders);       // Get all orders

export default router;
