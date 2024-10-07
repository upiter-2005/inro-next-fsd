'use client'
import { useCartStore } from "@/features/cart/model/cartSlice"
import { CongratulationWords } from "@/features/formCheckout/ui/CongratulationWords"
import { Delivery } from "@/features/formCheckout/ui/delivery"
import { Message } from "@/features/formCheckout/ui/message"
import { Packing } from "@/features/formCheckout/ui/packing"
import { Payment } from "@/features/formCheckout/ui/payment"
import { PersonData } from "@/features/formCheckout/ui/personData"
import { cn } from "@/shared/helpers"
import { checkoutFieldsSchema, defaulFieldsSchema, TCheckoutFields, TDefauldFields } from "@/shared/schemas/forms"
import { useEffect, useState } from "react"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

export interface ICheckout {
  className?: string
}

export const Checkout: React.FC<ICheckout> = ({ className }) => {

  const { cartItems } = useCartStore()
  const [empty, setEmpty] = useState<boolean>(false)

  const form = useForm<TCheckoutFields>({
    resolver: zodResolver(checkoutFieldsSchema),
    defaultValues:{
      fist_name: '',
      last_name: '',
      tel: '',
      email: '',

      rc_fist_name: '',
      rc_last_name: '',
      rc_tel: '',
      congrats_text: '',
      delivery: 'NP',
      payment: 'Visa/Mastercard',
      message: ''
    }
  })


  useEffect(()=>{
    setEmpty(cartItems.length > 0)
  }, [cartItems]
  )

  const onSubmit = async(data: TCheckoutFields) => {
    console.log(data);
    console.log('submit');
  }

  return (
    <div className={cn('flex max-w-[792px] w-full bg-[#fdfbf5] border border-solid border-[#E4E4E4] rounded-[8px]', className)}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id="checkout-form" className={`w-max-[630px] w-full  ${!empty && 'pointer-events-none opacity-60'}` }>
          <PersonData />
          <CongratulationWords />
          <Payment />
          <Delivery />

          {/*<Packing />*/}
          <Message />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>

  )
}


