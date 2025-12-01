import type { BaseEntity } from "./base";

export interface Category extends BaseEntity {
  name: string;
  image: string;
  description: string;
}
export interface CategoryDto {
  name: string;
  image: string | File ;
  description: string;
}
