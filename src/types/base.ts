import type { AppDispatch, RootState } from "../store/store";

export interface BaseEntity {
  id: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type ApiError = {
  message: string | null | undefined;
  statusCode?: number;
  fields?: Record<string, unknown>;
};

export interface Meta {
  message: string;
  status: number;
}

export interface ApiResponse<T> {
  meta: Meta;
  data: T;
  error: unknown;
}

export type statusType = "idle" | "pending" | "succeeded" | "failed";

export interface ApiThunk {
  state: RootState;
  dispatch: AppDispatch;
  extra: unknown;
  rejectValue: ApiError;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  // rejectedMeta?: unknown;
}

export interface Pagination {
  totalItems: number
  totalPage: number
  prevPage: number
  currentpage: number
  nextpage: number
  limit: number
}
