'use client'
import Image from "next/image"
import { confirmRecoverySchema, TConfirmRecoverySchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"

import toast from 'react-hot-toast'
import { useState, useTransition } from "react"

import loader from "@/shared/assets/images/loader.svg"
import { redirect } from "next/navigation"
import { logOut, resetPassword } from "@/app/actions"


export const ConfirmPassword:React.FC = () => {

  // const [inputType, setInputType] = useState<string>("password")
  // const [showPassword, setShowPassword] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()
  const form = useForm<TConfirmRecoverySchema>({
    resolver: zodResolver(confirmRecoverySchema),
    defaultValues:{
      code: '',
      password: '',
      confirmPassword: '',
      email: ''
    }
  })

  const onSubmit = async(data: TConfirmRecoverySchema) => {
  
    startTransition(async()=>{
      const formParams = {
        email: data.email,
        password: data.password,
        code: data.code
      }
      await resetPassword(formParams)
      await logOut()
      toast.success("Пароль успішно змінено", {icon: '✅'})
      redirect('/login')
      // console.log(response)
      //  if(response.message === 'Succses'){
      //   console.log(response.data)
      //   
        
      // }else{
      //   toast.error("Спробуйте знову, щось пішло не так(", {icon: '❌'})
      // }
    })
  }


// const toggleShowPassword = () => {
//   setShowPassword(!showPassword)
//   showPassword ? setInputType("text") : setInputType("password")
// }
  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6 py-10 md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] mt-[77px] mb-[120px]` }>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" >
          <h1 className="text-4xl mb-8">Змінити пароль</h1>

          <Input type='email' placeholder="Введіть email" name="email"/>

          <Input
            type="text"
            placeholder="Код з повідомлення"
            name="code"
          />
          {/* <Input
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
          /> */}

          <Input
            type="password"
            placeholder="Пароль"
            name="password"
          />
          <Input
            type="password"
            placeholder="Підтвердіть пароль"
            name="confirmPassword"
          />
          <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Змінити пароль"}</Button>

        </form>
      </FormProvider>


    </div>
  )
}

