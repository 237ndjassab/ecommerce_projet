import type { User } from "../../types/user";

export type Message = {
  id: number
  content: string
  fileUrl: string | null,
  fileName: string | null,
  fileType: string | null,
  senderId: number
  conversationId: number
  seen: boolean
  createdAt: string
  sender: User
};