'use client'
import Image from "next/image"
import { confirmRecoverySchema, TConfirmRecoverySchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { authUser, logOut, resetPassword, sendRecoveryMessage } from "@/app/actions"
import toast from 'react-hot-toast'
import { useState, useTransition } from "react"

import loader from "@/shared/assets/images/loader.svg"
import { useUserStore } from "@/features/loginUser/model/actions"
import { redirect } from "next/navigation"


export const ConfirmPassword:React.FC = () => {

  const [inputType, setInputType] = useState<string>("password")
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()
  const {user} = useUserStore()
  const form = useForm<TConfirmRecoverySchema>({
    resolver: zodResolver(confirmRecoverySchema),
    defaultValues:{
      code: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async(data: TConfirmRecoverySchema) => {
    startTransition(async()=>{

      const params = {...data, email: user.email}

      const response = await resetPassword(params)

       if(response.message === 'Succses'){
        toast.success("Пароль успішно змінено", {icon: '✅'})
        await logOut()
        redirect('/login')
      }else{
        toast.error("Спробуйте знову, щось пішло не так(", {icon: '❌'})
      }
    })
  }
console.log(showPassword);

const toggleShowPassword = () => {
  setShowPassword(!showPassword)
  showPassword ? setInputType("text") : setInputType("password")
}
  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6  md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] mt-[77px] mb-[120px]` }>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" >
          <h1 className="text-4xl mb-8">Змінити пароль</h1>
          <Input
            type="text"
            placeholder="Код з повідомлення"
            name="code"
          />
          <Input
            type={inputType}
            placeholder="Пароль"
            name="password"
            eye={true}
            changeType={toggleShowPassword}
          />
          <Input
            type={inputType}
            placeholder="Підтвердіть пароль"
            name="confirmPassword"
            eye={true}
            changeType={toggleShowPassword}
          />

          <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Змінити пароль"}</Button>

        </form>
      </FormProvider>


    </div>
  )
}

