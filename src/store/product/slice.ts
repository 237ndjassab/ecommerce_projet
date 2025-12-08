import { createSlice } from "@reduxjs/toolkit";
import {
  deleteProduct,
  getAllProduct,
  createProduct,
  updateProduct,
} from "./actions";
import type { ApiError, statusType } from "../../types/base";
import type { Product } from "../../types/product";

export interface ProductState {
  items: Product[];
  status: {
    getAll: statusType;
    delete: statusType;
    create: statusType;
    update: statusType;
  };
  error: {
    getAll: ApiError;
    delete: ApiError;
    create: ApiError;
    update: ApiError;
  };
}

const initialState: ProductState = {
  items: [],
  status: {
    getAll: "idle",
    delete: "idle",
    create: "idle",
    update: "idle",
  },
  error: {
    getAll: { message: null },
    delete: { message: null },
    create: { message: null },
    update: { message: null },
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.status.getAll = "pending";
        state.error.getAll = { message: null };
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.status.getAll = "succeeded";
        if (action.payload) {
          state.items = action.payload.data;
        }
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status.getAll = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });

    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status.delete = "pending";
        state.error.delete = { message: null };
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status.delete = "succeeded";
        if (action.payload) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.data.id
          );
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status.delete = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });

    builder
      .addCase(createProduct.pending, (state) => {
        state.status.create = "pending";
        state.error.create = { message: null };
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status.create = "succeeded";
        if (action.payload) {
          state.items.unshift(action.payload.data);
        }
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status.create = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });

    builder
      .addCase(updateProduct.pending, (state) => {
        state.status.update = "pending";
        state.error.update = { message: null };
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const id = action.payload?.data.id;
        state.status.update = "succeeded";
        if (action.payload) {
          state.items = state.items.map((item) =>
            item.id === id ? action.payload.data : item
          );
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status.update = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });
  },
});

export default productSlice;
