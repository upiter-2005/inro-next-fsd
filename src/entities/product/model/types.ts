import {ICategories} from "@/entities/categories/model/types"

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
  attributes: any[]
  id: number
  name: string
  categories: ICategories[]
  images: ProductImagesType[] | any
  meta_data: ProductMetaDataType[]
  price: string
  regular_price: string
  sale_price: string
  short_description: string
  slug: string
  stock_status: string
}