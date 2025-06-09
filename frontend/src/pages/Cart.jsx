import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + (item.discountPrice ?? item.price) * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 text-xl text-gray-700">
        Your cart is empty.<br />
        <Link to="/" className="text-blue-600 underline hover:text-blue-800">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-md border border-gray-200"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>
              <p className="text-gray-600 mt-1">
                Price: ₹{item.discountPrice ?? item.price}
              </p>
              <div className="flex items-center mt-3 gap-3">
                <label htmlFor={`qty-${item.id}`} className="text-gray-700 font-medium">
                  Qty:
                </label>
                <input
                  id={`qty-${item.id}`}
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="w-20 p-2 border border-gray-300 rounded-md text-gray-900"
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
              </div>
              <p className="mt-2 font-bold text-gray-900">
                Total: ₹{(item.discountPrice ?? item.price) * item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md text-white transition"
              aria-label={`Remove ${item.name} from cart`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end items-center gap-6">
        <span className="text-3xl font-semibold text-gray-900">
          Grand Total: ₹{getTotal()}
        </span>
        <Link to="/checkout">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg shadow-lg transition font-semibold">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
