import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditProduct from "./EditProduct";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  category: "tents" | "shelter" | "camp-cooking" | "dining" | "backpacks";
  image: string;
  quantity: number;
  description: string;
  ratings: number;
};

type ProductRowProps = {
  product: TProduct;
};

const ProductRow = ({ product }: ProductRowProps) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <img
          src={product.image}
          alt={product.name}
          className="w-12 h-12 rounded"
        />
      </td>
      <td className="py-3 px-6 text-left">{product.name}</td>
      <td className="py-3 px-6 text-left">${product.price.toFixed(2)}</td>
      <td className="py-3 px-6 text-left capitalize">{product.category}</td>
      <td className="py-3 px-6 text-center space-x-6">
        <EditProduct product={product} />
        <button className="text-red-600 hover:text-red-800">
          <FaTrashAlt className="size-6" />
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
