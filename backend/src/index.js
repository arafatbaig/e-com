import express from 'express';
import cors from 'cors'; // 👈 Import cors
import dotenv from 'dotenv';
import sequelize from './database.js'; // Sequelize instance
import productRoutes from './routes/productRoutes.js'; 
import orderRoutes from './routes/orderRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS for your frontend (e.g. Vite running at 5173)
app.use(cors({
  origin: 'http://localhost:5173', // 👈 Change this if frontend runs elsewhere
  credentials: true, // optional, only if you're dealing with cookies or auth headers
}));

app.use(express.json());

// Mount routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes); // ✅ ADD THIS


// Root route
app.get('/', (req, res) => {
  res.send('E-commerce backend running!');
});

// Start server and test DB connection
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit if DB connection fails
  }
}

startServer();
