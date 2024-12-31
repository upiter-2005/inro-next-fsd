'use client'
import { cn } from "@/shared/helpers"
import { Checkbox } from "@/shared/ui/checkbox"
import { Input } from "@/shared/ui/form/input"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useEffect, useRef, useState } from "react"
import { RecipientData } from "./recipientData"
import { useFormContext } from "react-hook-form"
import { useCartStore } from "@/features/cart/model/cartSlice"
import { checkoutProductsGtag } from "@/widgets/checkout/helpers/checkoutProductsGtag"

interface IPersonData {
  className?: string
}

export const PersonData:React.FC<IPersonData> = ({className}) => {
  const isClicked = useRef<boolean>(false)
  const {total, cartItems} = useCartStore()
  const [check, setCheck] = useState<boolean>(false)

  const productsArrGTAG: any = checkoutProductsGtag(cartItems)
  
  const {
    register,
    unregister,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()



  const handleCheck = (val:boolean): void => {

    if (!val){
      unregister("rc_first_name")
      unregister("rc_last_name")
      unregister("rc_tel")
    }
    setCheck(val)
  }

  const fbPixelInitCheckout = async()=>{
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.fbq('track', 'InitiateCheckout')
  }

  const trigerFb = () => {
    if(isClicked.current) return
    isClicked.current = true
    fbPixelInitCheckout()
  }

  useEffect(()=>{
    if (typeof window !== 'undefined' && cartItems.length > 0) {
      window.gtag('event', 'begin_checkout', { 
        'currency': "UAH",
        'value': total,
        'items': productsArrGTAG,
        'send_to':"ga"
      })
  }
  }, [cartItems])


  return(
    <>
      <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)} onClick={trigerFb}>
        <Subtitle text="Особисті дані"/>
        <div className="flex items-center gap-2 mb-8">
        <Checkbox
          onCheckedChange={()=>handleCheck(!check)}
          checked={check}
          className="rounded-[2px] w-4 h-4"
          id="notMe"
        />
        <label htmlFor="notMe" className="cursor-pointer text-sm">Отримувач не я</label>
        </div>

        <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:max-w-[630px] w-full">
          <Input type='text' name="first_name" placeholder="Ім’я" />
          <Input type='text' name="last_name" placeholder="Прізвище" />

        </div>
        <div className="flex items-center justify-between flex-col md:flex-row gap-6 md:max-w-[630px] w-full">
          <Input type='tel' name="tel" placeholder="38 073 1234567" />
          <Input type='email' name="email" placeholder="E-mail" />
        </div>
      </div>
      <div className={`${check ? 'max-h-52' : 'max-h-0'} max-w-[630px] w-full overflow-hidden transition-all duration-500 ease`}>
        {check && <RecipientData />}
      </div>


    </>

  )
}