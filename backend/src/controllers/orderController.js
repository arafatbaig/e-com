import db from '../models/index.js';

const { Order, OrderItem, Product } = db;

export async function placeOrder(req, res) {
  try {
    const { customerName, email, address, phone, items } = req.body;

    // Create order record
    const order = await Order.create({ customerName, email, address, phone });

    // Prepare order items array
    const orderItems = items.map(item => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    // Bulk create order items
    await OrderItem.bulkCreate(orderItems);

    res.status(201).json({ order, orderItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllOrders(req, res) {
  try {
    const orders = await Order.findAll({
      include: [
        { model: OrderItem, include: [Product] }
      ],
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
