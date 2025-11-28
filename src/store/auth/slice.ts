import { createSlice } from "@reduxjs/toolkit";
import type { AuthInfo, AuthToken } from "../../types/user";
import type { ApiError, statusType } from "../../types/base";
import { loginAction } from "./actions";
import Utils from "../../helpers/Utils";

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

const userInfo =  Utils.getAuthInfo();

const initialState: AuthState = {
  userInfo: userInfo? userInfo:  null,
  token: userInfo? userInfo.token:  null,
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
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.status.login = "pending";
        state.error.login = { message: null };
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.status.login = "succeeded";
        if(action.payload){
          state.token = action.payload.data.token;
          state.userInfo = action.payload.data;
        }
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.status.login = "failed";
        if(action.payload){
          // state.error.login = { message: action.payload };
        }
      });
  },
});

export default authSlice;
