import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";




export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
       

    },
    middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
  
}
    
);





// export const store = configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });