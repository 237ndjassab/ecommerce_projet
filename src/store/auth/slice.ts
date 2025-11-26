import { createSlice } from "@reduxjs/toolkit";
import type { AuthInfo, AuthToken } from "../../types/user";
import type { ApiError, statusType } from "../../types/base";

export interface AuthState {
  userInfo: AuthInfo | null;
  token: AuthToken | null;
  status: {
    register: statusType;
    login: statusType;
    refresh: statusType;
  };
  error: {
    register: ApiError;
    login: ApiError;
    refresh: ApiError;
  };
}

const initialState: AuthState = {
  userInfo: null,
  token: null,
  status: {
    register: "idle",
    refresh: "idle",
    login: "idle",
  },
  error: {
    register: { message: null },
    refresh: { message: null },
    login: { message: null },
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice;
