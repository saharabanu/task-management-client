import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "./baseApi";


const TASKS = '/tasks';
export const apiSlice = baseApi.injectEndpoints({
  
  endpoints: (build) => ({

    // single task
    getSingleTask: build.query({
      query: (id) => ({
        url: `${TASKS}/${id}`,
        method: "GET",
      }),
      providesTags: ['task'],
    }),

    // create task 

    createTask: build.mutation({
      query: (data) => ({
        url: TASKS,
        method: "POST",
         data,
      }),
      invalidatesTags: ['task'],
    }),

    // update task
 
 updateTask: build.mutation({
  query: ({id, ...task}) => ({
    url: `${TASKS}/${id}`,
    method: "PATCH",
    data: task
  }),

  invalidatesTags:['task']
}),

    // get all tasks
    getTasks: build.query({
      query: () => ({
        url: TASKS,
      }),
      providesTags: ['task'],
    }),

    

    // delete task

    deleteTask: build.mutation({
        query: (id) => ({
          url: `${TASKS}/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ['task'],
      }),



  }),
});

export const { useCreateTaskMutation, useUpdateTaskMutation, useGetTasksQuery, useGetSingleTaskQuery ,useDeleteTaskMutation } = apiSlice;
