import { createSlice } from "@reduxjs/toolkit";
import Utils from "../../helpers/Utils";
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
const categoryInfoState =  Utils.getAuthInfo();

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
            state.categoryInfo = categoryInfoState
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
