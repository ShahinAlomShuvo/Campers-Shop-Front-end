import InstagramShop from "@/components/home/InstagramShop";
import Service from "@/components/home/Service";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import { useGetProductsByIdQuery } from "@/redux/api/api";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  rating: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsByIdQuery(id);
  const [cart, setCart] = useState<CartItem[]>([]);

  const product = data?.data;
  console.log(product);

  // Helper function to add to cart
  // const addToCart = (product: Product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find(
  //       (item) => item.product.id === product.id
  //     );
  //     if (existingProduct) {
  //       // If product exists in the cart, increase quantity up to stock limit
  //       if (existingProduct.quantity < product.stock) {
  //         return prevCart.map((item) =>
  //           item.product.id === product.id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         );
  //       }
  //       return prevCart; // No change if quantity reaches stock
  //     } else {
  //       // Add product to cart if not already present
  //       return [...prevCart, { product, quantity: 1 }];
  //     }
  //   });
  // };

  // Check if the product is in the cart and disable button if stock limit is reached
  // const cartItem = cart.find((item) => item.product.id === product.id);
  // const isOutOfStock = cartItem ? cartItem.quantity >= product.stock : false;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PagesBanner
        currentPage={product?.name ? product.name : "Product Details"}
      />
      <Container>
        <Service />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 items-center">
          {/* Product Image */}
          <div>
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div className="pb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-lg font-bold text-orange-600">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <hr />

            <div className="py-2 text-gray-500">
              <p>{product.description}</p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              {/* Title */}
              <h3 className="text-green-600 text-lg font-semibold border-b border-gray-200 pb-2 mb-3">
                Special Offer
              </h3>

              {/* Offer Items */}
              <ul className="space-y-2">
                <li className="flex items-center text-green-500">
                  <FaCheckCircle className="mr-2" />{" "}
                  <p
                    className={` ${
                      product.quantity > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {product.quantity > 0
                      ? `In Stock: ${product.quantity}`
                      : "Out of Stock"}
                  </p>
                </li>
                <li className="flex items-center text-green-500">
                  <FaCheckCircle className="mr-2" />
                  Category: {product.category}
                </li>
                <li className="flex items-center text-green-500">
                  <FaCheckCircle className="mr-2" />
                  Rating:
                  <p> {product.rating} </p>
                </li>
                <li className="flex items-center text-green-500">
                  <FaCheckCircle className="mr-2" /> Free Delivery Available*
                </li>
                <li className="flex items-center text-green-500">
                  <FaCheckCircle className="mr-2" /> Sale 30% Off Use Code:
                  Deal30
                </li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            {/* <button
              onClick={() => addToCart(product)}
              disabled={isOutOfStock}
              className={`px-6 py-2 rounded-md text-white font-semibold transition-colors
        ${
          isOutOfStock
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700"
        }`}
            >
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button> */}
          </div>
        </div>
        <InstagramShop />
      </Container>
    </div>
  );
};

export default ProductDetail;
