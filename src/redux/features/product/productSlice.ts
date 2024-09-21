import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
};

type TProductState = {
  product: TProduct[];
};

const initialState: TProductState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
