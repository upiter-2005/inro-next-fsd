
import { updateSession } from "@/shared/helpers/auth"
import { NextRequest, NextResponse } from "next/server"


export const config = {
  matcher: ['/account']
}
export async function middleware(request: NextRequest) {
  
  console.log('middleware')
  const session =  await updateSession(request)
  if (session) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/login', request.url))


}
