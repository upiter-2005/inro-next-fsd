'use server'
import { TCheckoutFields } from '@/shared/schemas/forms'
import { revalidatePath } from 'next/cache'

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