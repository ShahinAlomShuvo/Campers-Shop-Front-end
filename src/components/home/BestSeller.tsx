import { Button } from "../ui/button";
import ProductsCard from "../ui/ProductsCard";

const BestSeller = () => {
  return (
    <div className="space-y-10">
      <div className="text-center py-10 space-y-3">
        <h2 className="text-3xl font-bold">Best Seller</h2>
        <p className="text-sm text-gray-500">
          Order online and have your products delivered to your closest store
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
      <div className="text-center">
        <Button className="btn  bg-[#c19d60] outline-none border-none mt-8 font-semibold px-8">
          View All
        </Button>
      </div>
    </div>
  );
};

export default BestSeller;
