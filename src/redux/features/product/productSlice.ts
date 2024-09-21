import { createSlice } from "@reduxjs/toolkit";
import { clear } from "console";

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
  sorting: string;
  search: string;
};

const initialState: TProductState = {
  product: [],
  category: "",
  price: 0,
  sorting: "asc",
  search: "",
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
    getSortingValue: (state, action) => {
      state.sorting = action.payload;
    },
    getSearchValue: (state, action) => {
      state.search = action.payload;
    },
    clearAllFilters: (state) => {
      state.category = "";
      state.price = 0;
      state.sorting = "asc";
      state.search = "";
    },
  },
});

export const {
  setProducts,
  getCategoryValue,
  getFilterPriceValue,
  getSortingValue,
  getSearchValue,
  clearAllFilters,
} = productSlice.actions;
export default productSlice.reducer;
