import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../types/base";
import type { AuthInfo, LoginDto, RegisterDto, User } from "../../types/user";

// export const registerAction = createAsyncThunk<ReturnedType, DataType, ApiThunkType>("", async()=>{});
export const registerAction = createAsyncThunk<ApiResponse<User>, RegisterDto>(
  "auth/registerAction",
  async (data, apiThunk) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "Post",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to ctreate user: ", error);
        return apiThunk.rejectWithValue("Failed to create user.");
      }
      const result = await response.json();

      console.log("Data on register: ", result);

      return result;
    } catch (error) {
      return apiThunk.rejectWithValue(
        (error as {message: string}).message || "Failed to create user."
      );
    }
  }
);

export const loginAction = createAsyncThunk<ApiResponse<AuthInfo>, LoginDto>(
  "auth/loginAction",
  async (data, apiThunk) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to verify user ", error);
        return apiThunk.rejectWithValue("Failed to verify user");
      }
      const result = await response.json();

      console.log("Data login: ", result);

      return result;
    } catch (error) {
      return apiThunk.rejectWithValue(
        (error as {message: string}).message || "Failed to verify user."
      );
    }
  }
);
