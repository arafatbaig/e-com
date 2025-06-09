import express from 'express';
import db from '../models/index.js';

const { Category } = db;


const router = express.Router();

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ order: [['name', 'ASC']] });
    res.json(categories);
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ error: 'Server error while fetching categories' });
  }
});

export default router;
