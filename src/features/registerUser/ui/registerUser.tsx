'use client'
import Image from "next/image"
import {formRegisterSchema, TFormRegisterSchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { registerUser } from "@/app/actions"
import toast from 'react-hot-toast';
import { useTransition } from "react"

import loader from "@/shared/assets/images/loader.svg"
import { redirect } from "next/navigation"

export const RegisterUser = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<TFormRegisterSchema>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues:{
      first_name: '',
      last_name: '',
      tel: '',
      email: '',
    }
  })

  const onSubmit = async(data: TFormRegisterSchema) => {
    startTransition( async () => {
       const response = await registerUser(data)
      if(response !== undefined) {
         toast.error(response.message, {icon: '❌'})
      }else{
         toast.success('Peєстрація пройшла успішно', {icon: '✅'})
         redirect("/login")
      }
    })
  }

  


  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6 py-14 md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] mt-[77px] mb-[120px]` }>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full` }  >
          <h1 className="text-4xl mb-8">Створити акаунт</h1>
          <Input type='text' placeholder="Ім'я" name="first_name"/>
          <Input type='text' placeholder="Прізвище" name="last_name"/>
          <Input type='text' placeholder="Email" name="email" />
          <Input type='text' placeholder="Телефон" name="tel" />
          <Input type='password' placeholder="Пароль" name="password" />
          <Input type='password' placeholder="Підтвердіть пароль" name="confirmPassword" />
          <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm  p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Створити акаунт"}</Button>

          <Link href="/login" className=" block text-center mx-auto pt-5 text-sm font-semibold">Увійти</Link>
        </form>

        {/* <Button onClick={emailTest} disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm  p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Test email"}</Button> */}
      </FormProvider>
    </div>

  )
}