import { NextRequest, NextResponse } from "next/server";
import {Api as WC_Api} from "@/shared/api/index"


export async function GET(request: NextRequest){

  const query = request.nextUrl.searchParams.get('query') 
  let products: any = {};
  await WC_Api.get(`products?slug=${query}`)
    .then((response: any) => {
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