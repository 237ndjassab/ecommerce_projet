import { createAsyncThunk } from "@reduxjs/toolkit";

import type {
  Category,
  CategoryDto,
  CategoryDtoUpdate,
} from "../../types/category";
import type { ApiResponse } from "../../types/base";
import fetchWithAuth from "../../services/fetchWithAuth.service";

export const getAllCategory = createAsyncThunk<ApiResponse<Category[]>>(
  "category/getAll",
  async (_, apiThunk) => {
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

export const createCategory = createAsyncThunk<
  ApiResponse<Category>,
  CategoryDto
>("category/createCategory", async (data, apiThunk) => {
  const formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("description", data.description);
  formdata.append("image", data.image);

  try {
    const response = await fetchWithAuth(
      `${import.meta.env.VITE_API_URL}/categories`,
      {
        method: "POST",
        body: formdata,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to create Categories: ", error);
      return apiThunk.rejectWithValue("Failed to create Categories.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error on create Categories: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error on create Categories."
    );
  }
});

export const deleteCategory = createAsyncThunk<ApiResponse<Category>, number>(
  "category/deleteCategory",
  async (id, apiThunk) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/categories/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to delete Categories: ", error);
        return apiThunk.rejectWithValue("Failed to delete Categories.");
      }
      const result = await response.json();

      return result;
    } catch (error) {
      console.log("Error on delete Categories: ", error);
      return apiThunk.rejectWithValue(
        (error as { message: string }).message || "Error on delete Categories."
      );
    }
  }
);

export const updateCategory = createAsyncThunk<
  ApiResponse<Category>,
  CategoryDtoUpdate
>("category/updateCategory", async (category, apiThunk) => {
  const formdata = new FormData();
  formdata.append("name", category.name);
  formdata.append("description", category.description);
  formdata.append("image", category.image);
  console.log("categorie image", category.image);
  try {
    const response = await fetchWithAuth(
      `${import.meta.env.VITE_API_URL}/categories/${category.id}`,
      {
        method: "PUT",
        body: formdata,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to update Categories: ", error);
      return apiThunk.rejectWithValue("Failed to update Categories.");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("Error on updating Categories: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error on updating Categories."
    );
  }
});
