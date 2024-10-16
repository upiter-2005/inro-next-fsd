'use client'
import Image from "next/image"
import { loginFieldsSchema, TLoginFieldsSchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { authUser } from "@/app/actions"
import toast from 'react-hot-toast'
import { useState, useTransition } from "react"

import loader from "@/shared/assets/images/loader.svg"
import { useUserStore } from "../model/actions"

export const LoginUser:React.FC = () => {
  const [inputType, setInputType] = useState<string>("password")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const {setUser} = useUserStore()
  const [isPending, startTransition] = useTransition()
  const form = useForm<TLoginFieldsSchema>({
    resolver: zodResolver(loginFieldsSchema),
    defaultValues:{
      login: '',
      password: ''
    }
  })


  const onSubmit = async(data: TLoginFieldsSchema) => {
    startTransition(async()=>{
      const response = await authUser(data)
      console.log(response)
       if(response.message === 'Succses'){
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.email,
          acf: {
            first_name: response.data.acf.first_name,
            last_name: response.data.acf.last_name,
            tel: response.data.acf.tel,
            born_date: response.data.acf.born_date,
            adress: response.data.acf.adress,
            street: response.data.acf.street
          }
        })
        toast.success("Авторизація успішна", {icon: '✅'})
      }else{
        toast.error("Перевірте коректність даних", {icon: '❌'})
      }
    })
  }
console.log(showPassword);
const toggleShowPassword = () => {
  setShowPassword(!showPassword)
  showPassword ? setInputType("text") : setInputType("password")
}
  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6 py-14 md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] mt-[77px] mb-[120px]` }>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" >
          <h1 className="text-4xl mb-8">Увійти в кабінет</h1>
          <Input type='text' placeholder="Логін або email" name="login"/>
          <Input
            type={inputType}
            placeholder="Пароль"
            name="password"
            eye={true}
            changeType={toggleShowPassword}
          />

          <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Увійти"}</Button>
          <Link href="/register" className=" block text-center mx-auto pt-5 text-sm font-semibold">Зареєструватися</Link>
        </form>
      </FormProvider>
    </div>
  )
}

