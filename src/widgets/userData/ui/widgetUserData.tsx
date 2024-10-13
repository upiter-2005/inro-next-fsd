'use client'
import Image from "next/image"
import {useForm, FormProvider} from "react-hook-form"
import {defaulFieldsSchema, TDefauldFields} from "@/shared/schemas/forms"
import { useTransition } from "react"
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/shared/ui/button"
import Link from "next/link"
import loader from "@/shared/assets/images/loader.svg"

interface IWidgetUserData {
  className?: string
}
export const WidgetUserData:React.FC<IWidgetUserData> = ({className}) => {

  const [isPending, startTransition] = useTransition()

  const form = useForm<TDefauldFields>({
    resolver: zodResolver(defaulFieldsSchema),
    defaultValues:{
      first_name: 'sdsd',
      last_name: 'sdsdds',
      tel: '',
      email: '',
    }
  })

  const onSubmit = async(data: TDefauldFields) => {
    startTransition( async () => {
      // if(response !== undefined) {
      //    toast.error(response.message, {icon: '❌'})
      // }else{
      //    toast.success('Peєстрація пройшла успішно', {icon: '✅'})
      //    redirect("/login")
      // }
    })
  }
  return (
    <FormProvider {...form}>
        <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4] w-full', className)}>
          <Subtitle text="Особисті дані"/>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" >
              <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
                <Input type='text' name="first_name" placeholder="Ім’я" />
                <Input type='text' name="last_name" placeholder="Прізвище" />
              </div>

              <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
                <Input type='tel' name="tel" placeholder="38 073 1234567" />
                <Input type='email' name="email" placeholder="E-mail" />
              </div>

              <Button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">{isPending ? <Image src={loader} width={55} height={55} alt="loader" /> : "Зберегти зміни"}</Button>

            <Link href="/recover" className="block text-center mx-auto pt-5 text-sm font-semibold">Змінити пароль</Link>
            </form>


        </div>
      </FormProvider>
  )
}