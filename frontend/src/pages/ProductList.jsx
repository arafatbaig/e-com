import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });

    fetch(`${import.meta.env.VITE_API_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Failed to fetch categories:', err));
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`Added "${product.name}" to cart!`);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  const filteredProducts =
    selectedCategoryId === 'all'
      ? products
      : products.filter((p) => p.Category?.id === selectedCategoryId);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight="bold" textAlign="center" my={5}>
        Products
      </Typography>

      <Box mb={4} display="flex" justifyContent="center">
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="category-select-label">Filter by Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={selectedCategoryId}
            label="Filter by Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="all">All Categories</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: 4,
                height: 450, // fixed card height
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6,
                },
              }}
            >
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
              >
                {/* Fixed height container for image */}
                <Box sx={{ height: 220, overflow: 'hidden', flexShrink: 0 }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="medium" gutterBottom noWrap>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom noWrap>
                    Category: {product.Category?.name || 'N/A'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span style={{ textDecoration: 'line-through', marginRight: 6 }}>
                      ₹{product.price}
                    </span>
                    <span style={{ color: '#d32f2f', fontWeight: 600 }}>
                      ₹{product.discountPrice || product.price}
                    </span>
                  </Typography>
                </CardContent>
              </Link>
              <Box px={2} pb={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
