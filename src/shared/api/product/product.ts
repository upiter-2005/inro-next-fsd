import { axiosInstance } from "../instance"
import { ApiRoutes } from "../api-routes"

export const getProducts = async(query?: string):Promise<any> => {
  const {data} = await axiosInstance.get(ApiRoutes.GET_PRODUCTS, {params: {query}})

  return data
}