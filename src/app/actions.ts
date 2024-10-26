'use server'
import { TCheckoutFields } from '@/shared/schemas/forms'
import { revalidatePath } from 'next/cache'
import {WP_API} from "@/shared/api/connectWpApi"
import { cookies } from 'next/headers'
import axios from "axios"
import { encrypt, getSession, logout } from '@/shared/helpers/auth'
import {api as WC_API} from "@/shared/api/connectWcApi"

import {transporter} from "@/shared/api/mailer/connect"
import handlebars from 'handlebars'
import fs from 'fs'


export async function makeOrder(data: any){
  console.log(data);
  try {
    const response = await WC_API.post("orders", data)
    console.log(response.data.id);
    // revalidatePath('/checkout')
    return { message: response.statusText, orderId: response.data.id}
  } catch (error) {
   console.log(error);
  }
  return {message: data}


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
          first_name: body.first_name,
          last_name: body.last_name,
          tel: body.tel
        }
    })

    revalidatePath('/register')

  const source = fs.readFileSync('./public/afterRegister.html', 'utf-8').toString()
  const template = handlebars.compile(source)
  const replacements = {
    username: body.first_name,
  }

  const htmlToSend = template(replacements)


    const info = await transporter.sendMail({
      from: 'Inro <inroaroma@gmail.com>',
      to: body.email,
      subject: 'Ваш особистий кабінет створено!',
      html: htmlToSend
    })


    //return{ response}
    } catch (error: any) {
      return {message: error.message};
    }
}

export async function authUser (body: any) {
  const data = {
    username: body.login,
    password: body.password
  }

  try{
    const res:any = await axios.post( `${process.env.NEXT_API_HOST}/wp-json/jwt-auth/v1/token`, data )
    const session = await encrypt(res.data)
    cookies().set("session", session, {maxAge: 1800, httpOnly: true})
    const params = {headers: {Authorization: `Bearer ${res.data.token}`}}
    const user = await axios.get( `${process.env.NEXT_API_HOST}/wp-json/wp/v2/users/me`, params)

    return {
      message: "Succses",
      data: user.data,
      email: body.login
    }
  }catch (err: any)  {
    return {
      message: err.response.data
    }
  }
}

export async function logOut (){
 await logout()
 revalidatePath('/account')
 return {message: "success"}
}

export async function updateUser(body: any){
  const data = {
    acf: {
      first_name: body.first_name,
      last_name: body.last_name,
      tel: body.tel,
      adress: body.adress,
      street: body.street
    }
  }

  try {
    const session = await getSession()
     const token = session.token
      const user = await axios.post(
        `${process.env.NEXT_API_HOST}/wp-json/wp/v2/users/${body.id}`,
        data,
        {headers: {Authorization: `Bearer ${token}`}}
      )
      console.log(user)
      revalidatePath("/account")
      return {
        message: "Succses",
        data: user.data,
      }
  } catch (error: any) {
    return {
      message: error.response.data
    }
  }
}

export async function sendRecoveryMessage (body: any) {
  const email = body.email
  try {
    const response = await axios.post(`${process.env.NEXT_API_HOST}/wp-json/bdpwr/v1/reset-password`, {email})
    console.log(response)
    return {
      message: "Succses",
      data: response.data,
    }
  } catch (error) {
    return {
      message: error
    }
  }
}


export async function resetPassword (body: any) {
  const data = {
    email: body.email,
    password: body.password,
    code: body.code
  }

  try {
    const response = await axios.post(`${process.env.NEXT_API_HOST}/wp-json/bdpwr/v1/set-password`, data)
    console.log("meassages:" + response)
    revalidatePath('/confirm-recover')
    // return {
    //   message: "Succses",
    //   data: response,
    // }
  } catch (e: any) {
    console.log(e.response.data)
  }
}