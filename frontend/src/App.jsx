import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Container } from '@mui/material';

export default function App() {
  return (
    <>
      {/* Navbar with store name and cart badge */}
      <Navbar />

      {/* Main content area */}
      <Box
        sx={{
          pt: 4,
          pb: 6,
          minHeight: 'calc(100vh - 64px)', // leave space for navbar
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Container>
       
      </Box>

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </>
    
  );
}
