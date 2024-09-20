import { Link } from "react-router-dom";

const CategoryCards = () => {
  return (
    <div className="flex items-center gap-6 border rounded">
      <img
        className="w-40"
        src="https://campic-store-demo.myshopify.com/cdn/shop/products/product10.2.jpg?v=1689901761"
        alt=""
      />
      <div className="space-y-2 mt-6 ">
        <Link to={"/products"}>
          <h3 className="text-lg font-semibold hover:text-[#f56e29] transition-all">
            Neck Gaiter
          </h3>
        </Link>
        <p className="text-orange-600 font-bold">$20.00</p>
      </div>
    </div>
  );
};

export default CategoryCards;
