import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <AppBar
      position="sticky"  // <-- change here for sticky
      elevation={1}
      sx={{
        bgcolor: '#ffffff',
        color: '#333',
        px: { xs: 2, sm: 4 },
        py: 1,
        borderBottom: '1px solid #e0e0e0',
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1, // ensures navbar is on top of other elements
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <StorefrontIcon sx={{ fontSize: 34, color: '#1976d2' }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            MyStore
          </Typography>
        </Box>

        <IconButton onClick={handleCartClick} sx={{ color: '#1976d2' }}>
          <Badge badgeContent={totalCount} color="error">
            <ShoppingCartIcon sx={{ fontSize: 28 }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
