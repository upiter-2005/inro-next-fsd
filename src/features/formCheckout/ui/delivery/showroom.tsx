'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { useState } from "react"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { useFormContext } from "react-hook-form"


interface IShowroom {
  className?: string
}



export const Showroom:React.FC<IShowroom> = ({className}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()
  return(
      <div className={cn("flex items-center gap-2 mb-8", className)}>
        <RadioGroup className='flex flex-col gap-4' defaultValue="Київ, Юрія Липи 6">
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem value="Київ, Юрія Липи 6" id="sh1" />
            <Label htmlFor="sh1" className="cursor-pointer">Київ, Юрія Липи 6</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Київ, Героїв Дніпра" id="sh2" />
            <Label htmlFor="sh2" className="cursor-pointer">Київ, Героїв Дніпра</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Київ, Площа Українських Героїв" id="sh3" />
            <Label htmlFor="sh3" className="cursor-pointer">Київ, Площа Українських Героїв</Label>
          </div>
        </RadioGroup>
      </div>
  )
}