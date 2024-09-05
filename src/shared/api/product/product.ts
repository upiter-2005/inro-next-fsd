//import ProductType from "./model"
import { axiosInstance } from "../instance"
import { ApiRoutes } from "../api-routes"
import {api as WC_Api } from "../connectWcApi"

export const getProducts = async(query?: string):Promise<any> => {
  const {data} = await axiosInstance.get(ApiRoutes.GET_PRODUCTS, {params: {query}})

  return data
}

export const getProductsAttributes = async():Promise<any> => {
  const {data} = await axiosInstance.get(ApiRoutes.GET_ATTRIBUTES)

  return data
}

export const getProductBySlug = async(query: string):Promise<any> => {
  const response = await fetch(`https://www.inro.com.ua/wp-json/wc/v3/products?slug=${query}&consumer_key=ck_7d0a0a541e4fc91baf8b23e22031cf8502c76b24&consumer_secret=cs_84669f4a9e954e566d4817d059786263b9a05ef7`)
  // let products: any = {};
  // await WC_Api.get(`products?slug=${query}` )
  //   .then((response: any) => {
  //     products = response.data;
  //   })
  //   .catch((error: any) => {
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     console.log("Always executed");
  //   });

  return response
}


