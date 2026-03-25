import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Conversation, Member } from "../../types/chat.ts";
import type { ApiError, statusType } from "../../types/base.ts";
import {
  createConversationAction,
  getAllConversationAction,
  getMessageAction,
} from "./action.ts";
import type { Message } from "../../pages/Main/types.chat.ts";

export interface conversationProp {
  name: string | undefined;
  isGroup: boolean | undefined;
  members: Member[];
  messages: Message[];
  conversations: Conversation[];
  status: {
    getMessage: statusType;
    getAllConversation: statusType;
    createConversation: statusType;
  };
  error: {
    getMessage: ApiError;
    getAllConversation: ApiError;
    createConversation: ApiError;
  };
}

const initialState: conversationProp = {
  name: "",
  isGroup: false,
  members: [],
  messages: [],
  conversations: [],
  status: {
    getMessage: "idle",
    getAllConversation: "idle",
    createConversation: "idle",
  },
  error: {
    getMessage: { message: null },
    getAllConversation: { message: null },
    createConversation: { message: null },
  },
};

const conversationSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    checkUserOnline: () => {
      // state.conversations.map(item => {
      // if (action.payload.includes(item.id)) {
      //   item.isOnline = true;
      // } else {
      //   item.isOnline = false;
      // }
      // });
    },
    setNewMessage: (state, action: PayloadAction<Message>) => {

      console.log("action", action.payload);
      
      state.messages.push(action.payload);
    },
  },
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
          state.conversations.push(action.payload.data);
        }
      })
      .addCase(createConversationAction.rejected, (state, action) => {
        state.status.createConversation = "failed";
        if (action.payload) {
          state.error.createConversation = action.payload as ApiError;
        }
      });

    builder
      .addCase(getAllConversationAction.pending, (state) => {
        state.status.getAllConversation = "pending";
        state.error.getAllConversation = { message: null };
      })
      .addCase(getAllConversationAction.fulfilled, (state, action) => {
        state.status.getAllConversation = "succeeded";
        if (action.payload) {
          state.conversations = action.payload.data;
        }
      })
      .addCase(getAllConversationAction.rejected, (state, action) => {
        state.status.getAllConversation = "failed";
        if (action.payload) {
          state.error.getAllConversation = action.payload as ApiError;
        }
      });

    builder
      .addCase(getMessageAction.pending, (state) => {
        state.status.getMessage = "pending";
        state.error.getMessage = { message: null };
      })
      .addCase(getMessageAction.fulfilled, (state, action) => {
        state.status.getMessage = "succeeded";
        if (action.payload) {
          state.messages = action.payload.data;
        }
      })
      .addCase(getMessageAction.rejected, (state, action) => {
        state.status.getMessage = "failed";
        if (action.payload) {
          state.error.getMessage = action.payload as ApiError;
        }
      });
  },
});

export const { setNewMessage } = conversationSlice.actions;

export default conversationSlice;
