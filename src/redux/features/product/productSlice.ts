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
  category: string;
  price: number;
};

const initialState: TProductState = {
  product: [],
  category: "",
  price: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.product = action.payload;
    },
    getCategoryValue: (state, action) => {
      state.category = action.payload;
    },

    getFilterPriceValue: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setProducts, getCategoryValue, getFilterPriceValue } =
  productSlice.actions;
export default productSlice.reducer;
