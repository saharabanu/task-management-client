import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),

  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: "/tasks",
      }),
      providesTags: ["tasks"],
    }),
  }),
});

export const { useGetTasksQuery } = apiSlice;
