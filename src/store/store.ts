import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import categorySlice from "./category/slice";
import productSlice from "./product/slice";
import userSlice from "./users/slice.ts";
import conversationSlice from "./chat/conversation/slice.ts";
export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [categorySlice.name]: categorySlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [conversationSlice.name]: conversationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
