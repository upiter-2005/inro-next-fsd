'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import { Checkbox } from "@/shared/ui/checkbox"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useEffect, useState } from "react"

import packing from "@/shared/assets/images/packing.jpg"
import { useFormContext } from "react-hook-form"
import { useSet } from "react-use"
interface IPacking {
  className?: string
}

const packages = [
  {name: "Круглий подарунковий бокс білий", price: "200", thumb: "https://www.api.inro.com.ua/wp-content/uploads/2021/04/Kruglyj-podarochnyj-boks-belyj-600x600.jpg" },
  {name: "Великий подарунковий бокс білій", price: "300", thumb: "https://www.api.inro.com.ua/wp-content/uploads/2021/04/Bolshoj-podarochnyj-boks-belyj-600x600.jpg" },
  {name: "Подарунковий бокс чорний INRO", price: " 700", thumb: "https://www.api.inro.com.ua/wp-content/uploads/2023/12/korobka3-600x774.jpg" },
  // {name: "Розмір XL", price: " 125", thumb: "https://www.inro.com.ua/wp-content/uploads/2021/04/Kruglyj-podarochnyj-boks-belyj-600x600.jpg" }
]

export const Packing:React.FC<IPacking> = ({className}) => {
  const [set, { add, has, remove, toggle, reset, clear }] = useSet<string>(new Set([]));
  const {
    register,
    formState: { errors },
    setValue,
    getValues
  } = useFormContext()

  const handlePacking = (checked: boolean | string, val: string): void => {
    toggle(val)
  }

  useEffect(()=>{
    setValue("packing", Array.from(set), { shouldValidate: true })
  }, [set, setValue])

  return(
    <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)}>
      <Subtitle text="Оберіть пакування"/>
      <div className="flex flex-wrap items-center gap-6 max-w-[630px] w-full">

        {packages.map((el, i) =>
          (<div className="flex items-center gap-3 max-w-[46%] w-full" key={i}>
            <Checkbox
                onCheckedChange={check => handlePacking?.(check, el.name)}
                {...register("packing")}
                value={el.name}
                className="rounded-[2px] w-4 h-4"
                id={`pack${i}`}
                checked={set?.has(el.name.toString())}
              />
            <div className="flex items-center gap-3">
              <label htmlFor={`pack${i}`}><Image src={el.thumb} width={72} height={72} className="rounded-[2px] cursor-pointer" alt="Inro" /></label>

              <div>
                <label htmlFor={`pack${i}`} className="cursor-pointer text-sm pb-2 text-[16px]">{el.name}</label>
                <div className="text-sm font-semibold tracking-[1px]">₴ {el.price}</div>
              </div>
            </div>
        </div>)
        )}


      </div>
    </div>
  )
}