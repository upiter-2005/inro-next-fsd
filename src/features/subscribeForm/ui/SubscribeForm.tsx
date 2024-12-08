'use client'
import Image from "next/image"
import { clallbackSchema, recoverySchema, TClallbackSchema, TRecoverySchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import {subscribeEmail } from "@/app/actions"
import toast from 'react-hot-toast'
import { useState, useTransition } from "react"

import loader from "@/shared/assets/images/loader.svg"
import { cn } from "@/shared/helpers"


export const SubscribeForm:React.FC = () => {
  const [formSend, setFormSend] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()
  const form = useForm<TRecoverySchema>({
    resolver: zodResolver(recoverySchema),
    defaultValues:{
      email: ''
    }
  })


  const onSubmit = async(data: TRecoverySchema) => {
    startTransition(async()=>{
      const response = await subscribeEmail(data)
      console.log(response)
      setFormSend(true)
 
    })
  }

  return (
   <>
      {formSend ? (
        <>
          <h3 className="text-center text-2xl text-[#111]">Вiтаємо! Тепер Ви підписані на новини Inro!</h3>
        </>
      ) : (
        <FormProvider {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)}>
           <Input type='text' placeholder="Електронна пошта" name="email" className={cn('text-sm w-full p-0 pb-3 mb-8 border border-solid border-transparent border-b-[#111]  bg-transparent placeholder:text-[#959595]')}/>
       
          <Button type="submit" disabled={isPending} className="max-w-[213px] w-full flex justify-center m-auto bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Підписатись"}</Button>
        </form>
        
      </FormProvider>
      )}
     </>
  
  )
}

