import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/products" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
