import type { BaseEntity } from "./base.ts";
import type { User } from "./user.ts";

export interface Conversation extends BaseEntity {
  name?: string;
  isGroup?: boolean;
  members: Member[];
}
export interface Member {
  id: number;
  userId: number;
  conversationId: number;
  joinedAt: string | Date;
  user: User;
}

export interface createDto {
  userIds: number[];
}
