//import ProductType from "./model"
import { axiosInstance } from "../instance"
import { ApiRoutes } from "../api-routes"

export const getProducts = async(query?: string):Promise<any> => {
  const {data} = await axiosInstance.get(ApiRoutes.GET_PRODUCTS, {params: {query}})

  return data
}

export const getProductsAttributes = async():Promise<any> => {
  const {data} = await axiosInstance.get(ApiRoutes.GET_ATTRIBUTES)

  return data
}