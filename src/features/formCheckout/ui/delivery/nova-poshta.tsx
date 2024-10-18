'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { useEffect, useState } from "react"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { useFormContext } from "react-hook-form"


interface INovaPoshta {
  className?: string
}

export const NovaPoshta:React.FC<INovaPoshta> = ({className}) => {
  const {
    register,
    unregister,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  useEffect(()=> {
    return () => {
      unregister("np_city")
      unregister("np_department")
      unregister("type_np")
    }
  },[unregister])

  const handleNpType = (val:string): void => {
    setValue("type_np", val)
  }
  return(
    <>

      <div className={cn("flex items-center gap-2 mb-8", className)}>
        <RadioGroup
          className='flex gap-4'
          defaultValue="У відділення"
          onValueChange={(val: string)=>handleNpType(val)}
        >
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem value="У відділення" id="r1" {...register("type_np")} />
            <Label htmlFor="r1" className="cursor-pointer">У відділення</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Кур’єром" id="r2" {...register("type_np")} />
            <Label htmlFor="r2" className="cursor-pointer">Кур’єром</Label>
          </div>
        </RadioGroup>
      </div>

       <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:max-w-[630px] w-full">
        <Input type='text' placeholder="Місто" name="np_city" />
        <Input type='text' placeholder="Відділення" name="np_department" />
      </div>

    </>

  )
}