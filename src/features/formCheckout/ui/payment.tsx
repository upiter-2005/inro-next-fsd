'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { Label } from "@/shared/ui/label"
import { useFormContext } from "react-hook-form"

interface IPayment {
  className?: string
}

export const Payment:React.FC<IPayment> = ({className}) => {
  const {
    register,
    setValue,
  } = useFormContext()

  const handlePayment = (val: string): void => {
    setValue("payment", val, { shouldValidate: true })
  }
  return(
    <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)}>

     <Subtitle text="Спосіб оплати"/>

     <div className={cn("flex items-center gap-2 mb-8", className)}>
        <RadioGroup className='flex flex-col gap-4' defaultValue="Visa/Mastercard" onValueChange={(val)=>handlePayment(val)}>
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem value="Visa/Mastercard" id="pay1" {...register("payment")} />
            <Label htmlFor="pay1" className="cursor-pointer">Visa/Mastercard</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="LiqPay Моментальні платежі по всьому світу" id="pay2" {...register("payment")}   />
            <Label htmlFor="pay2" className="cursor-pointer">LiqPay Моментальні платежі по всьому світу</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}