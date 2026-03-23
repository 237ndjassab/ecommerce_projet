import type { BaseEntity } from "./base";

export interface User extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  profile: string;
  password: string;
  resetToken?: string;
  resetTokenExpires?: string;
  roles?: Role[];
  permissionKeys?: string[];
  permissions?: Permission[];
  isOnline?: boolean
  lastSeen?: string
}

export interface Role {
  roleId: number;
  userId: number;
  assignAt: string;
  role: Role2;
}

export interface Role2 extends BaseEntity {
  name: string;
  roleKey: string;
  description: string;
}

export interface AuthToken {
  type: string;
  accessToken: string;
}

export interface AuthInfo {
  user: User;
  token: AuthToken;
}

export interface Permission {
  permissionKey: string;
  title: string;
}

export type RegisterDto = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type ForgotPasswordDto = {
  email: string;
};

export type VerifyOtpDto = {
  email: string;
  otp: string;
};

export type ResetPasswordDto = {
  email: string;
  password: string;
};
