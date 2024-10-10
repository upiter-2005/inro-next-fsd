'use client'
import {formRegisterSchema, TFormRegisterSchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { registerUser } from "@/app/actions"
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast';

export const RegisterUser = () => {
  const { pending } = useFormStatus()


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
    toast.success('Start', {
      icon: '✅',
    })
    const response = await registerUser(data);
    console.log(response);
    if(response !== undefined) {
      return toast.error(response.message, {
        icon: '❌',
      })
    }else{
      return toast.success('Peєстрація пройшла успішно', {
        icon: '✅',
      })
    }

  }

  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6 py-14 md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] mt-[77px] mb-[120px]` }>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full` }  >
          <h1 className="text-4xl mb-8">Реєстрація</h1>
          <Input type='text' placeholder="Ім'я" name="first_name"/>
          <Input type='text' placeholder="Прізвище" name="last_name"/>
          <Input type='text' placeholder="Email" name="email" />
          <Input type='text' placeholder="Телефон" name="tel" />
          <Input type='password' placeholder="Пароль" name="password" />
          <Input type='password' placeholder="Підтвердіть пароль" name="confirmPassword" />
          <Button type="submit" className="w-full bg-[#111] text-center text-white text-sm block p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">Зареєструватися</Button>
          <Link href="login" className=" block text-center mx-auto pt-5 text-sm font-semibold">Увійти</Link>
        </form>
      </FormProvider>
    </div>

  )
}