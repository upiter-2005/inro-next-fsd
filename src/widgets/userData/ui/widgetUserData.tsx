'use client'
import Image from "next/image"
import {useForm, FormProvider} from "react-hook-form"
import { TUpdateFieldsSchema, updateFieldsSchema} from "@/shared/schemas/forms"
import { useTransition } from "react"
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import loader from "@/shared/assets/images/loader.svg"
import { User, useUserStore } from "@/features/loginUser/model/actions"
import { updateUser } from "@/app/actions"
import toast from "react-hot-toast"

interface IWidgetUserData {
  className?: string,
  user: User
}
export const WidgetUserData:React.FC<IWidgetUserData> = ({className, user}) => {
  const {setUser} = useUserStore()
  const [isPending, startTransition] = useTransition()

  const form = useForm<TUpdateFieldsSchema>({
    resolver: zodResolver(updateFieldsSchema),
    defaultValues:{
      id: user.id,
      first_name: user.acf.first_name,
      last_name: user.acf.last_name,
      tel: user.acf.tel,
      email: user.email,
      adress: user.acf.adress,
      street: user.acf.street
    }
  })

  const onSubmit = async(data: TUpdateFieldsSchema) => {
    startTransition( async () => {

      const response = await updateUser(data)
      console.log(response);
      if(response.message === 'Succses'){
        setUser({
          email: response.data.email,
          acf: {
            first_name: response.data.acf.first_name,
            last_name: response.data.acf.last_name,
            tel: response.data.acf.tel,
            born_date: response.data.acf.born_date,
            adress: response.data.acf.adress,
            street: response.data.acf.street
          }
        })
        toast.success("Данні змінено успішно", {icon: '✅'})
      }else{
        toast.error("Перевірте коректність даних", {icon: '❌'})
      }
    })
  }
  return (
    <FormProvider {...form}>
        <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4] w-full', className)}>
          <Subtitle text="Особисті дані" className="font-bold"/>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" >
              <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
                <Input type='text' name="first_name" placeholder="Ім’я" />
                <Input type='text' name="last_name" placeholder="Прізвище" />
              </div>
              <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
                <Input type='tel' name="tel" placeholder="38 073 1234567" />
                <Input type='email' name="email" className="pointer-events-none" placeholder="E-mail" />
              </div>
              <Subtitle text="Адреса доставки" className="text-[18px] font-bold" />
              <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
                <Input type='text' name="adress" placeholder="Місто" />
                <Input type='text' name="street" placeholder="Адреса" />
              </div>
              <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Зберегти зміни"}</Button>
            <Link href="/recover" className="block text-center mx-auto pt-5 text-sm font-semibold">Змінити пароль</Link>
            </form>


        </div>
      </FormProvider>
  )
}