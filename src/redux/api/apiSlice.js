import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const TASKS = '/tasks';
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-server-sand.vercel.app/api/v1",
  }),

  tagTypes: ["tasks", 'task'],
  endpoints: (builder) => ({

    // single task
    getSingleTask: builder.query({
      query: (id) => ({
        url: `${TASKS}/${id}`,
        method: "GET",
      }),
      providesTags: ["tasks"],
    }),

    // create task 

    createTask: builder.mutation({
      query: (data) => ({
        url: TASKS,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tasks"],
    }),

    // update task
 
 updateTask: builder.mutation({
  query: (data) => ({
    url: `${TASKS}/${data.id}`,
    method: "PATCH",
    body: data.body
  }),

  invalidatesTags: ['tasks']
}),

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

export const { useCreateTaskMutation, useUpdateTaskMutation, useGetTasksQuery, useGetSingleTaskQuery ,useDeleteTaskMutation } = apiSlice;
