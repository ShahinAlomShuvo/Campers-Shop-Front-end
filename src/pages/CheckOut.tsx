import React, { useState } from "react";

// Define the types for the cart items
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
}

const Checkout: React.FC = () => {
  // State for cart items
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Hunting Pack",
      price: 179,
      quantity: 1,
      image: "/pack.png",
      stock: 5,
    },
    {
      id: 2,
      name: "Carabiner Compass",
      price: 275,
      quantity: 1,
      image: "/compass.png",
      stock: 10,
    },
  ]);

  // State for user information
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle order placement (deduct stock and redirect to success page)
  const handlePlaceOrder = () => {
    setCart(
      cart.map((item) => ({ ...item, stock: item.stock - item.quantity }))
    );
    window.location.href = "/";
  };

  return (
    <div className="container mx-auto py-8 border-t">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Details Form */}
        <div className="col-span-2 bg-white shadow-md border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Contact</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Email or mobile phone number
            </label>
            <input
              type="email"
              className="border rounded-lg w-full p-2 mt-1"
              placeholder="Email or mobile phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-2">
              <input type="checkbox" id="news-offers" className="mr-2" />
              <label htmlFor="news-offers">Email me with news and offers</label>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-6">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">
                First Name (optional)
              </label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className="border rounded-lg w-full p-2 mt-1"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">ZIP Code</label>
              <input
                type="text"
                className="border rounded-lg w-full p-2 mt-1"
                placeholder="ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info">
              Save this information for next time
            </label>
          </div>

          <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
          <div className="mb-6">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>

          <button
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 border">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <p className="font-semibold">Subtotal ({cart.length} items)</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-semibold">Shipping</p>
            <p>Enter shipping address</p>
          </div>
          <div className="flex justify-between mt-4 text-lg font-bold">
            <p>Total</p>
            <p>USD ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
