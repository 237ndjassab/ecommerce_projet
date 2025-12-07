import { createSlice } from "@reduxjs/toolkit";
import type { AuthInfo, AuthToken } from "../../types/user";
import type { ApiError, statusType } from "../../types/base";
import { loginAction, logoutAction, refreshTokenAction } from "./actions";
import Utils from "../../helpers/Utils";

export interface AuthState {
  userInfo: AuthInfo | null;
  token: AuthToken | null;
  status: {
    register: statusType;
    login: statusType;
    refresh: statusType;
    logout: statusType;
  };
  error: {
    register: ApiError;
    login: ApiError;
    refresh: ApiError;
    logout: ApiError;
  };
}

const userInfo = Utils.getAuthInfo();

const initialState: AuthState = {
  userInfo: userInfo ? userInfo : null,
  token: userInfo ? userInfo.token : null,
  status: {
    register: "idle",
    refresh: "idle",
    login: "idle",
    logout: "idle",
  },
  error: {
    register: { message: null },
    refresh: { message: null },
    login: { message: null },
    logout: { message: null },
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthInfo: (state) => {
      state.userInfo = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.status.login = "pending";
        state.error.login = { message: null };
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.status.login = "succeeded";
        if (action.payload) {
          state.token = action.payload.data.token;
          state.userInfo = action.payload.data;
        }
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.status.login = "failed";
        if (action.payload) {
          state.error.login = action.payload;
        }
      });

    builder
      .addCase(refreshTokenAction.pending, (state) => {
        state.status.refresh = "pending";
        state.error.refresh = { message: null };
      })
      .addCase(refreshTokenAction.fulfilled, (state, action) => {
        state.status.refresh = "succeeded";
        if (action.payload) {
          state.token = action.payload.data;
          if (state.userInfo) {
            state.userInfo.token = action.payload.data;
            Utils.setAuthInfo(state.userInfo);
          }
        }
      })
      .addCase(refreshTokenAction.rejected, (state, action) => {
        state.status.refresh = "failed";
        if (action.payload) {
          state.error.refresh = action.payload;
        }
      });

    builder
      .addCase(logoutAction.pending, (state) => {
        state.status.refresh = "pending";
        state.error.refresh = { message: null };
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.status.refresh = "succeeded";
        if (action.payload) {
          state.userInfo = null;
          state.token = null;

          Utils.removeAuthInfo();
        }
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.status.refresh = "failed";
        if (action.payload) {
          state.error.refresh = action.payload;
        }
      });
  },
});

export const { resetAuthInfo } = authSlice.actions;

export default authSlice;
