import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import categorySlice from "./category/slice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [categorySlice.name]: categorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
