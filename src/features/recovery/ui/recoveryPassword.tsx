'use client'
import Image from "next/image"
import { recoverySchema, TRecoverySchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { authUser, sendRecoveryMessage } from "@/app/actions"
import toast from 'react-hot-toast'
import { useState, useTransition } from "react"

import loader from "@/shared/assets/images/loader.svg"
import { useUserStore } from "@/features/loginUser/model/actions"
import { ConfirmPassword } from "./confirmPassword"


export const RecoveryPassword:React.FC = () => {
  const [codeRecieve, setCodeRecieve] = useState<boolean>(false)


  const [isPending, startTransition] = useTransition()

  const form = useForm<TRecoverySchema>({
    resolver: zodResolver(recoverySchema),
    defaultValues:{
      email: ''
    }
  })

  const onSubmit = async(data: TRecoverySchema) => {
    startTransition(async()=>{
      const response = await sendRecoveryMessage(data)
      console.log(response)
       if(response.message === 'Succses'){
        toast.success("Лист з повідомленням прийшов на пошту", {icon: '✅'})
        setCodeRecieve(true)
      }else{
        toast.error("Такий email не зареєстрований", {icon: '❌'})
      }
    })
  }

  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6 py-14 md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] mt-[77px] mb-[120px]` }>

      { codeRecieve ? (
        <ConfirmPassword />
      ) : (
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" >
          <h1 className="text-4xl mb-8">Змінити пароль</h1>
          <Input type='email' placeholder="Введіть email" name="email"/>

          <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Змінити пароль"}</Button>

        </form>
      </FormProvider>
      ) }

    </div>
  )
}

