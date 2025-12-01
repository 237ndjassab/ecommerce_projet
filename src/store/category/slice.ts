import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./actions";
import type { ApiError, statusType } from "../../types/base";
import type { Category } from "../../types/category";

export interface CategoryState {
  categoryInfo: Category[]
  status: {
      register: statusType;
      login: statusType;
      refresh: statusType;
    };
    error: {
      register: ApiError;
      login: ApiError;
      refresh: ApiError;
    };
}

const initialState: CategoryState = {
  categoryInfo: [],
  status: {
    register: "idle",
    refresh: "idle",
    login: "idle",
  },
  error: {
    register: { message: null },
    refresh: { message: null },
    login: { message: null },
  },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(getCategory.pending, (state) => {
          state.status.login = "pending";
          state.error.login = { message: null };
        })
        .addCase(getCategory.fulfilled, (state, action) => {
          state.status.login = "succeeded";
          if(action.payload){
            state.categoryInfo = action.payload.data
          }
        })
        .addCase(getCategory.rejected, (state, action) => {
          state.status.login = "failed";
          if(action.payload){
            // state.error.login = { message: action.payload };
          }
        });
    },
});

export default categorySlice;
