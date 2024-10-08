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
import { makeOrder } from "@/app/actions"
import { useFormStatus } from "react-dom"

export interface ICheckout {
  className?: string
}

export const Checkout: React.FC<ICheckout> = ({ className }) => {

  const { cartItems } = useCartStore()
  const [empty, setEmpty] = useState<boolean>(false)
  const { pending } = useFormStatus()

  const form = useForm<TCheckoutFields>({
    mode: "onChange",
    resolver: zodResolver(checkoutFieldsSchema),
    defaultValues:{
      fist_name: '',
      last_name: '',
      tel: '',
      email: '',
      delivery: 'NP',
      type_np: 'У відділення',
      payment: 'Visa/Mastercard',
      packing: [],
      message: ''
    },
    shouldUnregister: true
  })


  useEffect(()=>{
    setEmpty(cartItems.length > 0)
  }, [cartItems]
  )

  const onSubmit = async(data: TCheckoutFields) => {
    console.log(data);
    await makeOrder(data)

  }

  return (
    <div className={cn('flex max-w-[792px] w-full bg-[#fdfbf5] border border-solid border-[#E4E4E4] rounded-[8px]', className)}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id="checkout-form" className={`w-max-[630px] w-full  ${(!empty || pending) && 'pointer-events-none opacity-60'}` }>
          <PersonData />
          <CongratulationWords />
          <Payment />
          <Delivery />
          <Packing />
          <Message />
        </form>
      </FormProvider>
    </div>

  )
}


