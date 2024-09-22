import VideoBlogs from "@/components/home/VideoBlogs";
import Container from "@/components/ui/Container";
import PagesBanner from "@/components/ui/PagesBanner";
import {
  changeProductQUantity,
  removeFromCart,
  selectGrandTotalPrice,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { RootState } from "@/redux/store";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const grandTotal = useSelector((state: RootState) =>
    selectGrandTotalPrice(state)
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <PagesBanner currentPage="Cart" />
      <Container>
        <div className="grid grid-cols-4 gap-4 py-10">
          {/* Check if there are cart items */}
          {cartItems.length > 0 ? (
            <>
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
                    {cartItems.map((product) => (
                      <tr key={product._id} className="border-b">
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
                            value={product.selectedQuantity}
                            onChange={(e) => {
                              dispatch(
                                changeProductQUantity({
                                  _id: product._id,
                                  selectedQuantity: parseInt(e.target.value),
                                })
                              );
                            }}
                            className="border rounded w-16 text-center"
                            min="1"
                            max={product.quantity}
                          />
                        </td>

                        {/* Total Price */}
                        <td className="py-4 text-sm md:text-base">
                          $
                          {(product.price * product.selectedQuantity).toFixed(
                            2
                          )}
                        </td>

                        {/* Remove Button */}
                        <td className="py-4">
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() =>
                              dispatch(removeFromCart(product._id))
                            }
                          >
                            <FaTrashAlt size={20} />
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
                  <p className="text-lg font-bold">${grandTotal.toFixed(2)}</p>
                </div>
                <Link to={"/checkout"}>
                  <button
                    className={`mt-6 w-full py-3 text-white font-bold rounded-lg ${
                      grandTotal > 0
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={grandTotal === 0}
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="col-span-4 p-40 flex justify-center items-center bg-white shadow-xl border">
              <p className="text-lg font-bold">No products in the cart.</p>
              <Link to="/products" className="text-blue-500 hover:underline">
                Continue shopping
              </Link>
            </div>
          )}
        </div>
        <VideoBlogs />
      </Container>
    </>
  );
};

export default Cart;
