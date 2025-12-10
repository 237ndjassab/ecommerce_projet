import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../types/base";
import type { EnterProductDto, ProductEnterDto } from "../../types/stock";

export const productEnterAction = createAsyncThunk<
  ApiResponse<ProductEnterDto>,
  EnterProductDto
>("stocks/productEnter", async (data, apiThunk) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/enter_products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to create new Stocks: ", error);
      return apiThunk.rejectWithValue("Failed to create new Stocks.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error on create Stocks: ", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error on create Stocks."
    );
  }
});
