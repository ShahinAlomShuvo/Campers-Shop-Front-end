import MainLayout from "@/components/layouts/MainLayout";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/CheckOut";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetails";
import ProductManagement from "@/pages/ProductManagement";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products-details",
        element: <ProductDetail />,
      },

      {
        path: "products-management",
        element: <ProductManagement />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
