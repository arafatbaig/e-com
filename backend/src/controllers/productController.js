// src/controllers/productController.js
import db from '../models/index.js';

const { Product, Category } = db;


// Add Product
export async function addProduct(req, res) {
  try {
    const { name, price, discountPrice, image, categoryId } = req.body;
    const newProduct = await Product.create({ name, price, discountPrice, image, categoryId });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
} 

// Edit Product
export async function editProduct(req, res) {
  try {
    const { id } = req.params;
    const { name, price, discountPrice, image, categoryId } = req.body;

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.update({ name, price, discountPrice, image, categoryId });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete Product
export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// View All Products
export async function viewAllProducts(req, res) {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        attributes: ['id', 'name'], // include category id and name
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
// View Product Details
// View Product Details
export async function viewProductDetails(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: {
        model: Category,
        attributes: ['id', 'name'],
      },
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

