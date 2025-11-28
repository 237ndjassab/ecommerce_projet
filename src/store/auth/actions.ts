import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../types/base";
import type { AuthInfo, LoginDto, RegisterDto, User } from "../../types/user";
import Utils from "../../helpers/Utils";

// export const registerAction = createAsyncThunk<ReturnedType, DataType, ApiThunkType>("", async()=>{});
export const registerAction = createAsyncThunk<ApiResponse<User>, RegisterDto>(
  "auth/registerAction",
  async (data, apiThunk) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: "Post",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
        (error as { message: string }).message || "Failed to create user."
      );
    }
  }
);

export const loginAction = createAsyncThunk<ApiResponse<AuthInfo>, LoginDto>(
  "auth/loginAction",
  async (data, apiThunk) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "Post",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log("Failed to login user: ", error);
        return apiThunk.rejectWithValue("Failed to login user.");
      }
      const result = await response.json();

      if (result.data) {
        Utils.setAuthInfo(result.data);
      }

      return result;
    } catch (error) {
      console.log("Error on login request: ", error);
      return apiThunk.rejectWithValue(
        (error as { message: string }).message ||
          "Failed to login user due to network error."
      );
    }
  }
);
