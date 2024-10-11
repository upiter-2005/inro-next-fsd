'use client'
import { loginFieldsSchema, TLoginFieldsSchema} from "@/shared/schemas/forms"
import {Input} from "@/shared/ui/form/input"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import { authUser } from "@/app/actions"
import toast from 'react-hot-toast';

export const LoginUser = () => {

  const form = useForm<TLoginFieldsSchema>({
    resolver: zodResolver(loginFieldsSchema),
    defaultValues:{
      login: '',
      password: ''
    }
  })

  const onSubmit = async(data: TLoginFieldsSchema) => {
    console.log('subm');
    const response = await authUser(data)
    // const response = await registerUser(data)
    // console.log(response);
    // if(response !== undefined) {
    //   return toast.error(response.message, {
    //     icon: '❌',
    //   })
    // }else{
    //   return toast.success('Peєстрація пройшла успішно', {
    //     icon: '✅',
    //   })
    // }

  }




  return (
    <div className={`w-full md:w-auto md:min-w-[486px] bg-white px-6 py-14 md:px-14 border-1 border-solid border-[#E4E4E4] rounded-[8px] mt-[77px] mb-[120px]` }>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full` }  >
          <h1 className="text-4xl mb-8">Увійти в кабінет</h1>
          <Input type='text' placeholder="Логін або email" name="login"/>
          <Input type='password' placeholder="Пароль" name="password" />
          <Button type="submit" className="w-full bg-[#111] text-center text-white text-sm block p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">Увійти</Button>
          <Link href="/register" className=" block text-center mx-auto pt-5 text-sm font-semibold">Зареєструватися</Link>
        </form>
      </FormProvider>
    </div>

  )
}