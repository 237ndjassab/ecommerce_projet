import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../types/base.ts";
import type { User } from "../../types/user.ts";
import fetchWithAuth from "../../services/fetchWithAuth.service.ts";

export const getAllUser = createAsyncThunk<ApiResponse<User[]>>(
  "getAll",
  async (_, apiThunk) => {
    try {
      const response = await fetchWithAuth(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        },
      );
      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to download Categories: ", error);
        return apiThunk.rejectWithValue("Failed to download Categories.");
      }
      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Error on download Categories: ", error);
      return apiThunk.rejectWithValue(
        (error as { message: string }).message ||
          "Error on download Categories.",
      );
    }
  },
);
