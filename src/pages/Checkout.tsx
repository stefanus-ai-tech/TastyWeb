import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const Checkout = () => {
  const [deliveryOption, setDeliveryOption] = useState("express");
  const [paymentMethod, setPaymentMethod] = useState("rekomendasi");

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div>
          {/* Email Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Email Address Kamu</h2>
            <p className="text-sm text-gray-600 mb-2">
              Udah ada akun?{" "}
              <button className="text-primary hover:underline">Sign in</button>
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
            />
          </div>

          {/* Contact & Address */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kontak dan Alamat</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Alamat"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Kota"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                />
              </div>
              <input
                type="tel"
                placeholder="No Hp"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Delivery Options */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
            <RadioGroup value={deliveryOption} onChange={setDeliveryOption}>
              <div className="space-y-4">
                <RadioGroup.Option value="express">
                  {({ checked }) => (
                    <div
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        checked ? "border-primary" : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            checked
                              ? "border-primary bg-primary"
                              : "border-gray-300"
                          }`}
                        />
                        <span>Express</span>
                      </div>
                      <span>Rp. 25.000</span>
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="regular">
                  {({ checked }) => (
                    <div
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        checked ? "border-primary" : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            checked
                              ? "border-primary bg-primary"
                              : "border-gray-300"
                          }`}
                        />
                        <span>Regular</span>
                      </div>
                      <span>Rp. 20.000</span>
                    </div>
                  )}
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="flex gap-4 mb-4">
              {["Rekomendasi", "E-Wallet", "Virtual Account"].map((method) => (
                <button
                  key={method}
                  className={`px-4 py-2 rounded-lg border ${
                    paymentMethod.toLowerCase() === method.toLowerCase()
                      ? "border-primary text-primary"
                      : "border-gray-200"
                  }`}
                  onClick={() => setPaymentMethod(method.toLowerCase())}
                >
                  {method}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {["BCA Virtual Account", "Gopay", "OVO"].map((option) => (
                <button
                  key={option}
                  className="w-full px-4 py-3 text-left rounded-lg border border-gray-200 hover:border-primary"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            {/* Order Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span>Rp. {item.price.toLocaleString()}</span>
              </div>
            ))}

            {/* Voucher */}
            <div className="py-4 border-b">
              <h3 className="font-semibold mb-2">Voucher</h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Masukan voucher code kamu"
                  className="flex-grow px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
                />
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
                  Apply Voucher
                </button>
              </div>
            </div>

            {/* Order Details */}
            <div className="py-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp. 51.000</span>
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

            {/* Total */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Total Payment</span>
                <span>Rp. 73.000</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors">
              Place Order
            </button>
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

export default Checkout;