'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import { Checkbox } from "@/shared/ui/checkbox"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useState } from "react"

import packing from "@/shared/assets/images/packing.jpg"
import { useFormContext } from "react-hook-form"
import { useSet } from "react-use"
interface IPackingCheckbox {
  className?: string
  value: string,
  // checked: boolean,
  price: string
  handlePacking?: (check: boolean, value: string) => void
  selected: Set<string>
}


export const PackingCheckbox:React.FC<IPackingCheckbox> = ({className, value,  price, handlePacking, selected}) => {

  const [ischeck, setIsCheck] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    getValues
  } = useFormContext()

const handleChecbox = (check: string | boolean, value: string) => {
  setIsCheck(!check)
  // handlePacking(check, value)
  // console.log(check, value)
}

  return(

    <>
      <Checkbox
        onCheckedChange={check => console.log(check, value)}
        {...register("packing")}
        checked={selected?.has(value)}
        value={value}
        className="rounded-[2px] w-4 h-4"
        id={`pack${value}`}
      />
    <div className="flex items-center gap-3">
      <label htmlFor={`pack${value}`}><Image src={packing} width={72} height={72} className="rounded-[2px]" alt="Inro" /></label>

      <div>
        <label htmlFor={`pack${value}`} className="cursor-pointer text-sm pb-2 text-[16px]">{value}</label>
        <div className="text-sm font-semibold tracking-[1px]">{price}</div>
      </div>
    </div>
  </>

  )
}