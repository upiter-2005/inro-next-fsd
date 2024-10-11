'use server'
import { TCheckoutFields } from '@/shared/schemas/forms'
import { revalidatePath } from 'next/cache'
import {WP_API} from "@/shared/api/connectWpApi"
import { cookies } from 'next/headers'
import axios from "axios"
import { encrypt } from '@/shared/helpers/auth'

export async function makeOrder(data: TCheckoutFields){

  try {
    // ...
  } catch (error) {
    // ...
  }
  return {message: data}
  revalidatePath('/checkout')

}

export async function registerUser (body: any) {
  const email = body.email
  const password = body.password
    try {
      const response = await WP_API.users().create({
        username: body.first_name,
        email,
        roles: 'customer',
        password,
        acf: {
          last_name: body.last_name,
          tel: body.tel
        }
    })

    revalidatePath('/register')
    //return{ response}
    } catch (error: any) {
      console.log('Error [CREATE_USER]', error);
      return {message: error.message};
    }
}

export async function authUser (body: any) {
  const data = {
    username: body.login,
    password: body.password
  }

    const res:any = await axios.post( `${process.env.NEXT_API_HOST}/wp-json/jwt-auth/v1/token`, data )
    const session = await encrypt(res.data)
    cookies().set("session", session, {maxAge: 2600, httpOnly: true})

}