import { NextRequest, NextResponse } from "next/server";
import {Api as WC_Api} from "@/shared/api/index"

export async function GET(request: NextRequest){

  let attributes: any = [];
  await WC_Api.get('products/attributes')
    .then((response: any) => {
      console.log("Response Data:", response.data);

      attributes = response.data;
    })
    .catch((error: any) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Always executed");
    });
 
  return NextResponse.json(attributes)
}