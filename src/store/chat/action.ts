import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiError, ApiResponse, ApiThunk } from "../../types/base.ts";
import type { Conversation, createDto } from "../../types/chat.ts";
import fetchWithAuth from "../../services/fetchWithAuth.service.ts";
import type { Message } from "../../pages/Main/types.chat.ts";

export const createConversationAction = createAsyncThunk<
  ApiResponse<Conversation>,
  createDto,
  ApiThunk
>("conversation/createConversationAction", async (data, apiThunk) => {
  try {
    const response = await fetchWithAuth(
      `${import.meta.env.VITE_API_URL}/chat/conversations`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to create conversation: ", error);
      return apiThunk.rejectWithValue({ message: (error as ApiError).message || "Failed to create conversation." });
    }
    const result = response.json();
    return result;
  } catch (error) {

    console.error("error is :", error);
    return apiThunk.rejectWithValue(
      { message: (error as ApiError).message || "Error on download Categories." },
    );
  }
});


export const getAllConversationAction = createAsyncThunk<
  ApiResponse<Conversation[]>,
  void
>("conversation/getAllConversationAction", async (_, apiThunk) => {
  try {
    const response = await fetchWithAuth(
      `${import.meta.env.VITE_API_URL}/chat/conversations`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "Accept": "application/json",
        },
      },
    );
    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to create conversation: ", error);
      return apiThunk.rejectWithValue("Failed to retrieved conversations.");
    }
    const result = response.json();
    return result;
  } catch (error) {
    console.error("error is :", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error on retrieved conversations.",
    );
  }
});

export const getMessageAction = createAsyncThunk<
  ApiResponse<Message[]>,
  {conversationId: number}
>("conversation/getMessageAction", async ({conversationId}, apiThunk) => {
  try {
    const response = await fetchWithAuth(
      `${import.meta.env.VITE_API_URL}/chat/messages/${conversationId}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "Accept": "application/json",
        },
      },
    );
    if (!response.ok) {
      const error = await response.json();
      console.log("Failed to retrieved messages: ", error);
      return apiThunk.rejectWithValue("Failed to retrieved messages.");
    }
    const result = response.json();
    return result;
  } catch (error) {
    console.error("error is :", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error to retrieved messages.",
    );
  }
});