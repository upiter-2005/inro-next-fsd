import {ICategories} from "@/entities/categories"

export type ProductImagesType = {
  alt?: string
  src: string
}
export type ProductMetaDataType = {
  id: number,
  key: string,
  value: string | {}
}

export interface IProduct {
  id: number
  name: string
  categories: ICategories[]
  images: ProductImagesType[]
  meta_data: ProductMetaDataType[]
  price: string
  regular_price: string
  sale_price: string
  short_description: string
  slug: string
  stock_status: string
}