'use client'
import Image from 'next/image'
import { cn } from "@/shared/helpers"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useState } from "react"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"


import np from "@/shared/assets/images/nova-poshta.svg"
import pickup from "@/shared/assets/images/pickup.svg"
import international from "@/shared/assets/images/international.svg"
import { NovaPoshta } from './delivery/nova-poshta'
import { Showroom } from './delivery/showroom'
import { International } from './delivery/internation'
import { useFormContext } from 'react-hook-form'

interface IDelivery {
  className?: string
}

const enum Methods {
  NP = 'nova-poshta',
  PICKUP = 'pickup',
  INTERNATIONAL = 'international'
}

export const Delivery:React.FC<IDelivery> = ({className}) => {
  const {
    register,
    setValue
  } = useFormContext()

  const [delivery, setDelivery] = useState<string>(Methods.NP)

  const handleDelivery = (val: string): void =>{
    setDelivery(val)
    setValue("delivery", val, { shouldValidate: true })
  }
  return(
    <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)}>

      <Subtitle text="Спосіб доставки"/>
      <div className="flex items-center gap-2 mb-8">
        <RadioGroup
          onValueChange={(val: string)=>handleDelivery(val)}
          defaultValue={Methods.NP}
          className='flex'
        >
          <div className="flex items-center ">
            <RadioGroupItem value="nova-poshta" id="nova-poshta" className='hidden w-auto [&:checked+input+label]:bg-[#111]' {...register("delivery")} />
            <Label htmlFor="nova-poshta" className={`${delivery !== Methods.NP && 'opacity-55'} cursor-pointer transition-all`}>
              <Image src={np} alt="Inro" />
            </Label>
          </div>

           <div className="flex items-center ">
            <RadioGroupItem value="pickup" id="pickup" className='hidden w-auto' {...register("delivery")}/>
            <Label htmlFor="pickup" className={`${delivery !== Methods.PICKUP && 'opacity-55'} cursor-pointer transition-all`}>
              <Image src={pickup} alt="Inro" />
            </Label>
          </div>

          <div className="flex items-center ">
            <RadioGroupItem value="international" id="international" className='hidden w-auto' {...register("delivery")}/>
            <Label htmlFor="international" className={`${delivery !== Methods.INTERNATIONAL && 'opacity-55 transition-all'} cursor-pointer`}>
              <Image src={international} alt="Inro" />
            </Label>
          </div>
        </RadioGroup>

      </div>


      {delivery === Methods.NP ? (<NovaPoshta />) : ''}
      {delivery === Methods.PICKUP ? (<Showroom />) : ''}
      {delivery === Methods.INTERNATIONAL ? (<International />) : ''}




    </div>
  )
}