import { NextRequest, NextResponse } from "next/server";
import {Api as WC_Api} from "@/shared/api/index"

export async function GET(req: NextRequest){
  let products: any = [];
  //const query = req.nextUrl.searchParams.get('query') || '';
  await WC_Api.get("products", {
    per_page: 100,
    page: 2
   //orderby: 'menu_order',
    //lang: "en" // 20 products per page
  })
    .then((response: any) => {
      console.log("Response Data:", response.data);
      products = response.data;
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Always executed");
    });
 
  return NextResponse.json(products)
}