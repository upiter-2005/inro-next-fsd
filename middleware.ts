import { NextRequest } from "next/server";
// import { updateSession } from "./lib";

export async function middleware(request: NextRequest) {
  console.log('middleware');
  // return await updateSession(request);
}
