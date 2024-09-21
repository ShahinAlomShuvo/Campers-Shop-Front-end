import VideoBlogs from "@/components/home/VideoBlogs";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  quantity: number;
}

const initialCart: Product[] = [
  {
    id: 1,
    name: "Hunting Pack",
    price: 179.0,
    stock: 5,
    image: "https://via.placeholder.com/80",
    quantity: 1,
  },
  {
    id: 2,
    name: "Carabiner Compass",
    price: 275.0,
    stock: 3,
    image: "https://via.placeholder.com/80",
    quantity: 1,
  },
];

const Cart = () => {
  const [cart, setCart] = useState<Product[]>(initialCart);

  // Update Quantity
  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id && quantity > 0 && quantity <= product.stock
          ? { ...product, quantity }
          : product
      )
    );
  };

  // Remove product
  const removeProduct = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <PagesBanner />
      <Container>
        <div className="grid grid-cols-4 gap-4 py-10">
          {/* Cart Table */}
          <div className="w-full bg-white shadow-md border rounded-lg md:p-6 col-span-4 lg:col-span-3">
            <table className="w-full text-center table-fixed">
              <thead>
                <tr>
                  <th className="border-b pb-4">Product</th>
                  <th className="border-b pb-4">Price</th>
                  <th className="border-b pb-4">Quantity</th>
                  <th className="border-b pb-4">Total</th>
                  <th className="border-b pb-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id} className="border-b">
                    {/* Product Column */}
                    <td className="py-4 flex flex-col md:flex-row gap-2 items-center justify-start">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 md:w-16 md:h-16 rounded"
                      />
                      <span className="text-sm md:text-base">
                        {product.name}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="py-4 text-sm md:text-base">
                      ${product.price.toFixed(2)}
                    </td>

                    {/* Quantity Input */}
                    <td className="py-4">
                      <input
                        type="number"
                        className="border rounded w-16 text-center"
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity(product.id, parseInt(e.target.value))
                        }
                        min="1"
                        max={product.stock}
                      />
                    </td>

                    {/* Total Price */}
                    <td className="py-4 text-sm md:text-base">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>

                    {/* Remove Button */}
                    <td className="py-4">
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => removeProduct(product.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="mt-8 md:mt-0 bg-white border shadow-md rounded-lg p-6 col-span-4 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Cart Totals
            </h2>
            <div className="flex justify-between">
              <p className="font-semibold">Total</p>
              <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
            </div>
            <Link to={"/checkout"}>
              <button
                className={`mt-6 w-full py-3 text-white font-bold rounded-lg ${
                  totalPrice > 0
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={totalPrice === 0}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
        <VideoBlogs />
      </Container>
    </>
  );
};

export default Cart;
