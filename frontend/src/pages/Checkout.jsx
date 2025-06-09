import { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: '',
    email: '',
    address: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error('Your cart is empty. Please add items before checking out.');
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/orders`, {
        ...form,
        items: cartItems,
      });

      toast.success('Order placed successfully!');
      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Failed to place order:', error);
      toast.error('Error placing order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
        Checkout
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="customerName"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.phone}
          onChange={handleChange}
          required
          pattern="^[0-9+\- ]{7,15}$"
          title="Please enter a valid phone number"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold transition ${
            loading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
