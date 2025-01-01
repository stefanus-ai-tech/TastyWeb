import { Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-4">Product</th>
                  <th className="text-center pb-4">Price</th>
                  <th className="text-center pb-4">Qty</th>
                  <th className="text-right pb-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <button className="text-sm text-gray-500 hover:text-primary">
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">Rp. {item.price}</td>
                    <td className="text-center">
                      <div className="flex items-center justify-center">
                        <button className="p-1 hover:text-primary">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button className="p-1 hover:text-primary">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                    <td className="text-right">
                      Rp. {(item.price * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="md:col-span-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp. 34.000</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>Rp. 20.000</span>
              </div>
              <div className="flex justify-between">
                <span>Order Fee</span>
                <span>Rp. 2.000</span>
              </div>
            </div>
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>Rp. 56.000</span>
              </div>
            </div>
            <div className="space-y-4">
              <Link
                to="/menu"
                className="block text-center py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="block text-center py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cartItems = [
  {
    id: 1,
    name: "Nasi Goreng Seafood",
    price: 17000,
    quantity: 1,
    image: "/lovable-uploads/334af0a0-cffd-4357-acb9-e501d6e6bbd7.png"
  },
  {
    id: 2,
    name: "Nasi Goreng Katsu",
    price: 17000,
    quantity: 1,
    image: "/lovable-uploads/2a170724-8bc2-4d0d-ad35-0bd264034629.png"
  }
];

export default Cart;