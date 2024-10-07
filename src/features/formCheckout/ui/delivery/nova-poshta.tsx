'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { useState } from "react"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { useFormContext } from "react-hook-form"


interface INovaPoshta {
  className?: string
}

export const NovaPoshta:React.FC<INovaPoshta> = ({className}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()
  return(
    <>

      <div className={cn("flex items-center gap-2 mb-8", className)}>
        <RadioGroup className='flex gap-4' defaultValue="У відділення">
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem value="У відділення" id="r1" />
            <Label htmlFor="r1" className="cursor-pointer">У відділення</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Кур’єром" id="r2" />
            <Label htmlFor="r2" className="cursor-pointer">Кур’єром</Label>
          </div>
        </RadioGroup>
      </div>

       <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">

        <Input type='text' placeholder="Місто" />
        <Input type='text' placeholder="Відділення" />
      </div>

    </>

  )
}