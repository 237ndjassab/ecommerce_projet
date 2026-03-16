import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "./action.ts";

import type { ApiError, statusType } from "../../types/base";
import type { User } from "../../types/user.ts";

export interface CategoryState {
  items: User[];
  status: {
    getAllUser: statusType;
  };
  error: {
    getAll: ApiError;
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
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUser.pending, (state) => {});
  },
});
export default userSlice;
