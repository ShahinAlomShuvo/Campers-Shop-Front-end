import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import { useGetProductsQuery } from "@/redux/api/api";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
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

              {/* Button to create new product */}
              <button className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md">
                Create New Product
              </button>
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
                  <tr
                    key={product._id}
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
                    <td className="py-3 px-6 text-left capitalize">
                      {product.category}
                    </td>
                    <td className="py-3 px-6 text-center space-x-6">
                      <button className="text-blue-600 hover:text-blue-800 ">
                        <FaEdit className="size-6" />
                      </button>

                      <button className="text-red-600 hover:text-red-800">
                        <FaTrashAlt className="size-6" />
                      </button>
                    </td>
                  </tr>
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
