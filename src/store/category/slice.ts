import { createSlice } from "@reduxjs/toolkit";

export interface CategoryState {
  value: number;
}

const initialState: CategoryState = {
  value: 0,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice;
