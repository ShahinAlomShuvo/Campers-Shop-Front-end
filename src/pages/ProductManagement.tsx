import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/50",
    name: "Product 1",
    price: 19.99,
    category: "Category 1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50",
    name: "Product 2",
    price: 29.99,
    category: "Category 2",
  },
];

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showConfirmation, setShowConfirmation] = useState<number | null>(null);

  // Delete product with confirmation
  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
    setShowConfirmation(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      {/* Button to create new product */}
      <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md">
        Create New Product
      </button>

      {/* Product Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded"
                />
              </td>
              <td className="py-3 px-6 text-left">{product.name}</td>
              <td className="py-3 px-6 text-left">
                ${product.price.toFixed(2)}
              </td>
              <td className="py-3 px-6 text-left">{product.category}</td>
              <td className="py-3 px-6 text-center space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit /> Edit
                </button>

                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => setShowConfirmation(product.id)}
                >
                  <FaTrashAlt /> Delete
                </button>

                {/* Confirmation Prompt */}
                {showConfirmation === product.id && (
                  <div className="absolute mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-lg">
                    <p>Are you sure you want to delete this product?</p>
                    <div className="mt-4 space-x-2">
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-md"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Confirm
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-300 text-black rounded-md"
                        onClick={() => setShowConfirmation(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
