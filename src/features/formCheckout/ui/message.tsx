'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useFormContext } from "react-hook-form"

interface IMessage {
  className?: string
}

export const Message:React.FC<IMessage> = ({className}) => {

  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()
  return(
    <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)}>

     <Subtitle text="Додаткова інформація"/>

      <div className={`max-w-[630px] w-full overflow-hidden transition-all duration-500 ease`}>
        <Input type='text' placeholder="Коментар до замовлення" {...register("message")} />
      </div>
    </div>
  )
}