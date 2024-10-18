'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { useEffect } from "react"
import { useFormContext } from "react-hook-form"

interface IInternational {
  className?: string
}

export const International:React.FC<IInternational> = ({className}) => {

  const {
    register,
    unregister,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  useEffect(()=> {
    return () => {
      unregister("in_country")
      unregister("in_city")
      unregister("in_adress")
      unregister("in_zip")
    }
  },[unregister])

  return(
    <div className={cn('', className)}>

      <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:max-w-[630px] w-full">
        <Input type='text' placeholder="Країна" name="in_country"/>
        <Input type='text' placeholder="Населений пункт" name="in_city" />
      </div>

      <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:max-w-[630px] w-full">
        <Input type='text' placeholder="Адреса" name="in_adress"/>
        <Input type='text' placeholder="ZIP-code" name="in_zip" />
      </div>

    </div>
  )
}