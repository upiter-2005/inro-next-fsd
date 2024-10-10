'use server'
import { TCheckoutFields } from '@/shared/schemas/forms'
import { revalidatePath } from 'next/cache'
import {WP_API} from "@/shared/api/connectWpApi"

export async function makeOrder(data: TCheckoutFields){
  console.log(data);
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