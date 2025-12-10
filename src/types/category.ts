import type { BaseEntity, Pagination } from "./base";

export interface Category extends BaseEntity {
  name: string;
  image: string;
  description: string;
}
export interface CategoryDto {
  name: string;
  image: string | File;
  description: string;
}
export interface CategoryDtoUpdate {
  id: number;
  name: string;
  image: string | File;
  description: string;
}

export interface CategoriesFilter {
  search?: string;
  limit?: number;
  page?: number;
}

export interface PaginationCategories {
  list: Category[];
  pagination: Pagination;
}
