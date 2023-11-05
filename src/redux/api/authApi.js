import { baseApi } from "./baseApi"






export const AUTH_URL= '/user'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    userSignup: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ['user'],
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url:`${AUTH_URL}/login`,
        method:"POST",
        data: loginData

      }),
      invalidatesTags:['user']
    }),
  }),
  
})

export const { useUserSignupMutation, useUserLoginMutation} = authApi