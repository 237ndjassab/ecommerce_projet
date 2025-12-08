import type { BaseEntity } from "./base";

export interface ProductImage {
  image: string;
  gallery: string[];
}

export interface Product extends BaseEntity {
  name: string;
  price: number;
  quantity: number;
  images: ProductImage;
  description: string;
  categoryId: number;
}
export interface ProductDto {
  name: string;
  price: number;
  quantity: number;
  images: ProductImage;
  description: string;
  categoryId: number;
}
export interface ProductDtoUpdate {
  id: number;
  name: string;
  image: string | File;
  description: string;
}
