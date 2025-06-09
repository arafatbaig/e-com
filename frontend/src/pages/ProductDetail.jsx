import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Failed to fetch product details', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Added "${product.name}" to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[450px] object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.description || 'No description available.'}</p>

            <div className="text-xl mb-6">
              {product.discountPrice && product.discountPrice < product.price ? (
                <div className="flex items-center gap-3">
                  <span className="line-through text-gray-400 text-lg">₹{product.price}</span>
                  <span className="text-3xl font-bold text-red-600">₹{product.discountPrice}</span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 min-w-[140px] py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 min-w-[140px] py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
