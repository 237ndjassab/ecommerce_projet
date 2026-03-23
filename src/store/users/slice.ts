import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getAllUser } from "./action.ts";

import type { ApiError, statusType } from "../../types/base";
import type { User } from "../../types/user.ts";

export interface userState {
  items: User[];
  status: {
    getAllUser: statusType;
  };
  error: {
    getAllUser: ApiError;
  };
}

const initialState: userState = {
  items: [],
  status: {
    getAllUser: "idle",
  },
  error: {
    getAllUser: { message: null },
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserOnline: (state, action: PayloadAction<number[]>) => {
      state.items.map(item => {
        if (action.payload.includes(item.id)) {
          item.isOnline = true;
        } else {
          item.isOnline = false;
        }
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.status.getAllUser = "pending";
        state.error.getAllUser = { message: null };
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.status.getAllUser = "succeeded";
        if (action.payload) {
          state.items = action.payload.data;
        }
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.status.getAllUser = "failed";
        if (action.payload) {
          //gestion d'erreur ici
        }
      });
  },
});

export const {checkUserOnline} = userSlice.actions;
export default userSlice;
