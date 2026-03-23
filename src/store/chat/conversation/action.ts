import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../../types/base.ts";
import type { Conversation, createDto } from "../../../types/chat.ts";
import fetchWithAuth from "../../../services/fetchWithAuth.service.ts";

export const createConversationAction = createAsyncThunk<
  ApiResponse<Conversation>,
  createDto
>("conversation/create", async (data, apiThunk) => {
  try {
    const response = await fetchWithAuth(
      `${import.meta.env.VITE_API_URL}/chat/conversations`,
      {
        method: "Post",
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
      return apiThunk.rejectWithValue("Failed to create conversation.");
    }
    const result = response.json();
    return result;
  } catch (error) {
    console.error("error is :", error);
    return apiThunk.rejectWithValue(
      (error as { message: string }).message || "Error on download Categories.",
    );
  }
});
