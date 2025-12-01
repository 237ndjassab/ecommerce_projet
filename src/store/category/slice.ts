import { createSlice } from "@reduxjs/toolkit";
import Utils from "../../helpers/Utils";
import { deleteCategory, getAllCategory, createCategory } from "./actions";
import type { ApiError, statusType } from "../../types/base";
import type { Category } from "../../types/category";

export interface CategoryState {
  items: Category[]
  status: {
      getAll: statusType;
      delete: statusType;
      create: statusType;
    };
    error: {
      getAll: ApiError;
      delete: ApiError;
      create: ApiError;
    };
}

const initialState: CategoryState = {
  items: [],
  status: {
    getAll: "idle",
    delete: "idle",
    create: "idle",
  },
  error: {
    getAll: { message: null },
    delete: { message: null },
    create: { message: null}
  },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(getAllCategory.pending, (state) => {
          state.status.getAll = "pending";
          state.error.getAll = { message: null };
        })
        .addCase(getAllCategory.fulfilled, (state, action) => {
          state.status.getAll = "succeeded";
          if(action.payload){
            state.items = action.payload.data;
          }
        })
        .addCase(getAllCategory.rejected, (state, action) => {
          state.status.getAll = "failed";
          if(action.payload){
            // state.error.login = { message: action.payload };
          }
        });

       builder
        .addCase(deleteCategory.pending, (state) => {
          state.status.delete = "pending";
          state.error.delete = { message: null };
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
          state.status.delete = "succeeded";
          if(action.payload){
            state.items = state.items.filter(item => item.id !== action.payload.data.id)
          }
        })
        .addCase(deleteCategory.rejected, (state, action) => {
          state.status.delete = "failed";
          if(action.payload){
            // state.error.login = { message: action.payload };
          }
        });

      builder
        .addCase(createCategory.pending, (state) => {
          state.status.create = "pending";
          state.error.create = { message: null };
        })
        .addCase(createCategory.fulfilled, (state, action) => {
          state.status.create = "succeeded";
          if(action.payload){
            state.items.unshift(action.payload.data)
          }
        })
        .addCase(createCategory.rejected, (state, action) => {
          state.status.create = "failed";
          if(action.payload){
            // state.error.login = { message: action.payload };
          }
        });
    },
});

export default categorySlice;
