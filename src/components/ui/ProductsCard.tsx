import { Link } from "react-router-dom";
import CartSvg from "./CartSvg";
import HeartSvg from "./HeartSvg";
import SearchSvg from "./SearchSvg";

const ProductsCard = () => {
  return (
    <div className="relative rounded-lg overflow-hidden group ">
      <img
        src="https://campic-store-demo.myshopify.com/cdn/shop/products/product12_5ad78891-a8aa-4fbf-868e-91c6a471d073.jpg?v=1689901681"
        alt="Neck Gaiter"
        className="w-full rounded-lg"
      />

      {/* Icons will fade in and slide in from the right */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
        <button className="bg-white p-2 rounded-full shadow-md">
          <HeartSvg />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md">
          <CartSvg />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md">
          <SearchSvg />
        </button>
      </div>

      <div className="space-y-2 mt-6">
        <Link to={"/products"}>
          <h3 className="text-lg font-semibold group-hover:text-[#f56e29] transition-all">
            Neck Gaiter
          </h3>
        </Link>
        <p className="text-orange-600 font-bold">$20.00</p>
      </div>
    </div>
  );
};

export default ProductsCard;
