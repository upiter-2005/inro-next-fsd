'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"

interface IRecipientData {
  className?: string
}

export const RecipientData:React.FC<IRecipientData> = ({className}) => {


  return(
    <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)}>
      <Subtitle text="Дані отримувача"/>

      <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:max-w-[630px] w-full">
        <Input type='text' name="rc_first_name" placeholder="Ім’я" />
        <Input type='text' name="rc_last_name"placeholder="Прізвище" />

      </div>
      <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:max-w-[630px] w-full">
        <Input type='tel' name="rc_tel" placeholder="38 073 1234567" />
      </div>
    </div>
  )
}