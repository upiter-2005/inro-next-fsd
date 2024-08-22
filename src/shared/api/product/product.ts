//import ProductType from "./model"
import { axiosInstance } from "../instance"
import { ApiRoutes } from "../api-routes"

export const getProducts = async():Promise<any> => {
  console.log(ApiRoutes.GET_PRODUCTS);
  const {data} = await axiosInstance.get(ApiRoutes.GET_PRODUCTS)

  return data
}