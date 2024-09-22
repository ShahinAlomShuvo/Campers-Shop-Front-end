import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ratings: number;
  stock: number;
};

type TCartItems = TProduct & { quantity: number };

type TCartState = {
  product: TCartItems[];
  total: number;
};

const initialState: TCartState = {
  product: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.product.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        state.product = state.product.map((item) =>
          item._id === existingProduct._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const selectItemQuantity = (state: RootState, productId: string) => {
  const item = state.cart.product.find((product) => product._id === productId);
  return item ? item.quantity : 0;
};

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
