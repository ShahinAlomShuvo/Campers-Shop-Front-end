import AddProduct from "@/components/productManagement/AddProduct";
import ProductRow from "@/components/productManagement/ProductRow";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import { useGetProductsQuery } from "@/redux/api/api";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: "tents" | "shelter" | "camp-cooking" | "dining" | "backpacks";
  image: string;
  ratings: number;
  quantity: number;
};

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const products = data?.data || [];

  return (
    <>
      <PagesBanner currentPage="Product Management" />
      <Container>
        {isLoading ? (
          <div className="text-center py-32">Loading products...</div>
        ) : (
          <div className="p-6">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
              <AddProduct />
            </div>

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
                {products.map((product: TProduct) => (
                  <ProductRow key={product._id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProductManagement;
