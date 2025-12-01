import { createAsyncThunk } from "@reduxjs/toolkit";

import type { Category, CategoryDto } from "../../types/category";
import type { ApiResponse } from "../../types/base";
import Utils from "../../helpers/Utils";

export const getCategory = createAsyncThunk<ApiResponse<Category[]>>(
  "category/getAll",
  async (_,apiThunk) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to download Categories: ", error);
        return apiThunk.rejectWithValue("Failed to download Categories.");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log("Error on download Categories: ", error);
      return apiThunk.rejectWithValue(
        (error as { message: string }).message ||
          "Error on download Categories."
      );
    }
  }
);

export const createCategory = createAsyncThunk<ApiResponse<CategoryDto>, CategoryDto>(
  "category/getAll",
  async (data,apiThunk) => {
    const formdata = new FormData();
formdata.append("name", data.name);
formdata.append("description", data.description);
formdata.append("image", data.image);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body: formdata,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to create Categories: ", error);
        return apiThunk.rejectWithValue("Failed to create Categories.");
      }
      const result = await response.json();

      if (result.data) {
        Utils.setAuthInfo(result.data);
      }

      return result;
    } catch (error) {
      console.log("Error on create Categories: ", error);
      return apiThunk.rejectWithValue(
        (error as { message: string }).message ||
          "Error on create Categories."
      );
    }
  }
);