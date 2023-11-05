import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./api/apiSlice";

import {reducer} from './rootReducer';
import { baseApi } from "./api/baseApi";


export const store = configureStore({
    reducer,
    // reducer:{
    //     [apiSlice.reducerPath]: apiSlice.reducer,
       

    // },
    middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
  
}
    
);





// export const store = configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });