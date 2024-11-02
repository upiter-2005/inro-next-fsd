'use client'
import Image from "next/image"
import { clallbackSchema, TClallbackSchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { authUser, callUser } from "@/app/actions"
import toast from 'react-hot-toast'
import { useState, useTransition } from "react"

import loader from "@/shared/assets/images/loader.svg"


export const CallBackForm:React.FC = () => {
  const [formSend, setFormSend] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()
  const form = useForm<TClallbackSchema>({
    resolver: zodResolver(clallbackSchema),
    defaultValues:{
      name: '',
      tel: ''
    }
  })


  const onSubmit = async(data: TClallbackSchema) => {
    startTransition(async()=>{
      const response = await callUser(data)
      setFormSend(true)
    //   console.log(response)
    //    if(response.message === 'Succses'){
     
    //     toast.success("Авторизація успішна", {icon: '✅'})
    //   }else{
    //     toast.error("Перевірте коректність даних", {icon: '❌'})
    //   }
    })
  }

  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6 py-2 md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] ` }>
      {formSend ? (
        <>
          <h3 className="text-center text-2xl text-[#111]">Ваша заявка отримана!</h3>
          <p className="text-center">Ми зв&apos;яжемось з Вами у найближчій час!</p>
        </>
      ) : (
        <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" >

          <h1 className="text-4xl mb-8 text-[#111]">Замовити дзвінок</h1>
          <Input type='text' placeholder="Ваше ім'я" name="name"/>
          <Input type='text' placeholder="Ваш телефон" name="tel"/>

          <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Увійти"}</Button>
         
        </form>
      </FormProvider>
      )}
     

      
    </div>
  )
}

