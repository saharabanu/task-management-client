import {baseApi} from './baseApi'

const TASKS = "/tasks";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleService: build.query({
      query: (id) => ({
        url: `${SERVICE}/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getServices: build.query({
      query: (arg) => {
        return {
          url: SERVICE,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: ["service"],
    }),
    updateService: build.mutation({
      query: ({ id, ...service }) => ({
        url: `${SERVICE}/${id}`,
        method: "PATCH",
        data: service,
      }),
      invalidatesTags: ["service"],
    }),

    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),



  }),
});

export const { useGetServicesQuery, useGetSingleServiceQuery , useUpdateServiceMutation, useDeleteServiceMutation} = serviceApi;