import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/products" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        console.log(query);
        const params = new URLSearchParams();
        if (query?.category) params.append("category", query.category);
        if (query?.price) params.append("price", query.price);
        return {
          url: "/",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
