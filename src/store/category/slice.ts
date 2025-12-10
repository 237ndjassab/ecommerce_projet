import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCategory,
  getAllCategory,
  createCategory,
  updateCategory,
  getPaginateCategorieAction,
} from "./actions";
import type { ApiError, Pagination, statusType } from "../../types/base";
import type { Category } from "../../types/category";

export interface CategoryState {
  items: Category[] ;
  pagination: Pagination
  status: {
    getAll: statusType;
    getPaginate: statusType;
    delete: statusType;
    create: statusType;
    update: statusType;
  };
  error: {
    getAll: ApiError;
    getPaginate: ApiError;
    delete: ApiError;
    create: ApiError;
    update: ApiError;
  };
}

const initialState: CategoryState = {
  items: [],
  pagination: {
    totalItems: 0,
    totalPage: 1,
    prevPage: 0,
    currentpage: 1,
    nextpage: 0,
    limit: 10,
  },
  status: {
    getAll: "idle",
    getPaginate: "idle",
    delete: "idle",
    create: "idle",
    update: "idle",
  },
  error: {
    getAll: { message: null },
    getPaginate: { message: null },
    delete: { message: null },
    create: { message: null },
    update: { message: null },
  },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPaginateCategorieAction.pending, (state) => {
        state.status.getPaginate = "pending";
        state.error.getPaginate = { message: null };
      })
      .addCase(getPaginateCategorieAction.fulfilled, (state, action) => {
        state.status.getPaginate = "succeeded";
        if (action.payload) {
          state.items = action.payload.data.list;
          state.pagination = action.payload.data.pagination;
        }
      })
      .addCase(getPaginateCategorieAction.rejected, (state, action) => {
        state.status.getPaginate = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });

    builder
      .addCase(getAllCategory.pending, (state) => {
        state.status.getAll = "pending";
        state.error.getAll = { message: null };
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.status.getAll = "succeeded";
        if (action.payload) {
          state.items = action.payload.data;
        }
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.status.getAll = "failed";
        if (action.payload) {
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
        if (action.payload) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.data.id
          );
        }
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status.delete = "failed";
        if (action.payload) {
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
        if (action.payload) {
          state.items.unshift(action.payload.data);
        }
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.status.create = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });

    builder
      .addCase(updateCategory.pending, (state) => {
        state.status.update = "pending";
        state.error.update = { message: null };
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const id = action.payload?.data.id;
        state.status.update = "succeeded";
        if (action.payload) {
          state.items = state.items.map((item) =>
            item.id === id ? action.payload.data : item
          );
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status.update = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });
  },
});

export default categorySlice;
