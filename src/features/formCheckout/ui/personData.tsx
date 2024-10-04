'use client'
import { cn } from "@/shared/helpers"
import { Checkbox } from "@/shared/ui/checkbox"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useState } from "react"

interface IPersonData {
  className?: string  
}

export const PersonData:React.FC<IPersonData> = ({className}) => {
  const [check, setCheck] = useState<boolean>(false)
  return(
    <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)}>
      <Subtitle text="Особисті дані"/>
      <div className="flex items-center gap-2 mb-8">
      <Checkbox 
        onCheckedChange={()=>setCheck(!check)}
        checked={check}
        value="me"
        className="rounded-[2px] w-4 h-4"
        id={"notMe"}
       />
       <label htmlFor="notMe" className="cursor-pointer text-sm">Отримувач не я</label>
      </div>

      <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
        <Input type='text' placeholder="Ім’я" />
        <Input type='text' placeholder="Прізвище" />
     
      </div>
      <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
        <Input type='tel' placeholder="38 073 1234567" />
        <Input type='email' placeholder="E-mail" />
      </div>
    </div>
  )
}