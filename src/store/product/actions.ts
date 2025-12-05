import { createAsyncThunk } from "@reduxjs/toolkit";

import type {
  Product,
  ProductDto,
  ProductDtoUpdate,
} from "../../types/product";
import type { ApiResponse } from "../../types/base";

export const getAllProduct = createAsyncThunk<ApiResponse<Product[]>>(
  "product/getAll",
  async (_, apiThunk) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/products`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to download Products: ", error);
        return apiThunk.rejectWithValue("Failed to download Products.");
      }
      const result = await response.json();

      return result;
    } catch (error) {
      console.log("Error on download Products: ", error);
      return apiThunk.rejectWithValue(
        (error as { message: string }).message ||
          "Error on download Products."
      );
    }
  }
);

export const createProduct = createAsyncThunk<
  ApiResponse<Product>,
  ProductDto
>("product/createProduct", async (data, apiThunk) => {
  const formdata = new FormData();
  formdata.append("name", data.name);
  formdata.append("description", data.description);
  formdata.append("price", data.price.toString());
  formdata.append("categoryId", data.categoryId.toString());
  // ----- Images -----
  // 1 image principale
  if (data.images.image) {
    formdata.append("image", data.images.image);
  }

  // Plusieurs images (gallery)
  if (data.images.gallery && data.images.gallery.length > 0) {
    data.images.gallery.forEach((file) => {
      formdata.append("gallery", file); // IMPORTANT : même clé répétée
    });
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formdata,
    });

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to create Products: ", error);
      return apiThunk.rejectWithValue("Failed to create Products.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error on create Products: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error on create Products."
    );
  }
});

export const deleteProduct = createAsyncThunk<ApiResponse<Product>, number>(
  "product/deleteProduct",
  async (id, apiThunk) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to delete Products: ", error);
        return apiThunk.rejectWithValue("Failed to delete Products.");
      }
      const result = await response.json();

      return result;
    } catch (error) {
      console.log("Error on delete Products: ", error);
      return apiThunk.rejectWithValue(
        (error as { message: string }).message || "Error on delete Products."
      );
    }
  }
);

export const updateProduct = createAsyncThunk<
  ApiResponse<Product>,
  ProductDtoUpdate
>("product/updateProduct", async (product, apiThunk) => {
  const formdata = new FormData();
  formdata.append("name", product.name);
  formdata.append("description", product.description);
  formdata.append("image", product.image);
  console.log("categorie image", product.image);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/${product.id}`,
      {
        method: "PUT",
        headers: {
        accept: "application/json",
      },
      body: formdata,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to update Products: ", error);
      return apiThunk.rejectWithValue("Failed to update Products.");
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("Error on updating Products: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error on updating Products."
    );
  }
});
