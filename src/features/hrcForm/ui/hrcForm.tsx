'use client'
import Image from "next/image"
import {  horecaFieldsSchema, THorecaFieldsSchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import { horecaRequest } from "@/app/actions"
import { useState, useTransition } from "react"
import loader from "@/shared/assets/images/loader.svg"


export const HrcForm:React.FC = () => {
  const [formSend, setFormSend] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()
  const form = useForm<THorecaFieldsSchema>({
    resolver: zodResolver(horecaFieldsSchema),
    defaultValues:{
      name: '',
      tel: '',
      email: '',
      message: ''
    }
  })


  const onSubmit = async(data: THorecaFieldsSchema) => {
    startTransition(async()=>{
      const response = await horecaRequest(data)
      setFormSend(true)
      console.log(data)
    
    })
  }

  return (
    <div className={`w-full px-6 border-1 border-solid ` }>
      {formSend ? (
        <>
          <h3 className="text-center text-2xl text-[#fff]">Ваша заявка отримана!</h3>
          <p className="text-center">Ми зв&apos;яжемось з Вами у найближчій час!</p>
        </>
      ) : (
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-wrap gap-2" >
            <h3 className="text-2xl font-semibold mb-4 text-white w-full">Замовити дзвінок</h3>
            <div className="w-full md:w-[48%]"><Input type='text' placeholder="Ваше ім'я" name="name" className="!border-b-white text-fill-white pb-3"/></div>
            <div className="w-full md:w-[48%]"><Input type='text' placeholder="Ваша телефон" name="tel" className="!border-b-white text-fill-white  pb-3"/></div>
            <div className="w-full md:w-[48%]"><Input type='text' placeholder="Ваш пошта" name="email" className="!border-b-white text-fill-white  pb-3"/></div>
            <div className="w-full md:w-[48%]"></div>
            <div className="w-full"><Input type='text' placeholder="Ваше повідомлення" name="message" className="!border-b-white text-fill-white  pb-3"/></div>
            
            <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-white text-center text-[#111] text-sm p-3 rounded-sm hover:bg-[#575757] hover:text-black transition-all hover:opacity-70 leading-4">
              {isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Відправити"}
            </Button>
          </form>
        </FormProvider>
      )}
     

      
    </div>
  )
}

