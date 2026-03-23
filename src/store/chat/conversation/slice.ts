import { createSlice } from "@reduxjs/toolkit";
import type { Member } from "../../../types/chat.ts";
import type { ApiError, statusType } from "../../../types/base.ts";
import { createConversationAction } from "./action.ts";

export interface conversationProp {
  name: string | undefined;
  isGroup: boolean | undefined;
  members: Member[];
  status: {
    createConversation: statusType;
  };
  error: {
    createConversation: ApiError;
  };
}

const initialState: conversationProp = {
  name: "",
  isGroup: false,
  members: [],
  status: {
    createConversation: "idle",
  },
  error: {
    createConversation: { message: null },
  },
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createConversationAction.pending, (state) => {
        state.status.createConversation = "pending";
        state.error.createConversation = { message: null };
      })
      .addCase(createConversationAction.fulfilled, (state, action) => {
        state.status.createConversation = "succeeded";
        if (action.payload) {
          state.name = action.payload.data.name;
          state.isGroup = action.payload.data.isGroup;
          state.members = action.payload.data.members;
        }
      })
      .addCase(createConversationAction.rejected, (state, action) => {
        state.status.createConversation = "failed";
        if (action.payload) {
          // state.error.login = { message: action.payload };
        }
      });
  },
});

export default conversationSlice;
