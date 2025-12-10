import type { BaseEntity } from "./base"

export interface ProductEnterDto {
  productEnter: ProductEnter
  productEnterLines: ProductEnterLines
}


export interface ProductEnter extends BaseEntity {
  code: string
  enterAt: string
}

export interface ProductEnterLines {
  count: number
}

export interface EnterProductDto {
  code: string
  enterAt: string
  lines: Line[]
}

export interface Line {
  productId: number
  quantity: number
  price: number
}