import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const TASKS = '/tasks';
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),

  tagTypes: ["tasks", 'task'],
  endpoints: (builder) => ({
    // get all tasks
    getTasks: builder.query({
      query: () => ({
        url: TASKS,
      }),
      providesTags: ["tasks"],
    }),

    // delete task

    deleteTask: builder.mutation({
        query: (id) => ({
          url: `${TASKS}/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["tasks"],
      }),



  }),
});

export const { useGetTasksQuery, useDeleteTaskMutation } = apiSlice;
