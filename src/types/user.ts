import type { BaseEntity } from "./base";

export interface User extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  profile: string;
  password: string;
  roles: string[];
  permissionKeys: string[];
  permissions: Permission[];
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
