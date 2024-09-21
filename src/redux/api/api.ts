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
        if (query?.sorting) params.append("sorting", query.sorting);
        if (query?.search) params.append("search", query.search);
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
