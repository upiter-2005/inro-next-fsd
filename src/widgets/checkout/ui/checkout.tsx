'use client'
import { useCartStore } from "@/features/cart/model/cartSlice"
import { CongratulationWords } from "@/features/formCheckout/ui/CongratulationWords"
import { Delivery } from "@/features/formCheckout/ui/delivery"
import { Message } from "@/features/formCheckout/ui/message"
import { Packing } from "@/features/formCheckout/ui/packing"
import { Payment } from "@/features/formCheckout/ui/payment"
import { PersonData } from "@/features/formCheckout/ui/personData"
import { cn } from "@/shared/helpers"
import { checkoutFieldsSchema, TCheckoutFields } from "@/shared/schemas/forms"
import { useEffect, useState, useTransition } from "react"
import {useForm, FormProvider} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { makeOrder } from "@/app/actions"
import { useFormStatus } from "react-dom"
import { useUserStore } from "@/features/loginUser/model/actions"
import { ICartItem } from "@/entities/cartItem/model/types"
import toast from "react-hot-toast"
import { createMessage } from "../helpers/createMessage"
import { checkoutProducts } from "../helpers/checkoutProducts"
import { emailProducts } from "../helpers/emailProducts"
import { useCheckoutStore } from "@/features/formCheckout/model/checkoutSlice"
import { LiqPayPay } from "@/shared/ui/form/liqpay"
import { useRouter } from 'next/navigation'
import { useCountDiscountPrice } from "@/features/cart/hooks/useCountDiscountPrice"
import { useLiqpayDiscount } from "@/features/cart/hooks/useLiqpayDiscount"
import { checkoutProductsGtag } from "../helpers/checkoutProductsGtag"
import { checkoutProductsAds } from "../helpers/checkoutProductAds"
import { googlePurchaseApi } from "@/shared/helpers/googleApi"
import { getClientId } from "@/shared/helpers/getClientId"

export interface ICheckout {
  className?: string
}

export const Checkout: React.FC<ICheckout> = ({ className }) => {
  const {summaryTotal} = useCountDiscountPrice()
  const {lqSummaryTotal} = useLiqpayDiscount()
  const {payment, orderIdNumber, setOrderIdNumber, setAmount, lqAmount, setOfferSubmit} = useCheckoutStore()
  const { cartItems, clearCart, total, couponCode } = useCartStore()
  const {user} = useUserStore()
  const [empty, setEmpty] = useState<boolean>(false)
  const { pending } = useFormStatus()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const form = useForm<TCheckoutFields>({
    mode: "onChange",
    resolver: zodResolver(checkoutFieldsSchema),
    defaultValues:{
      first_name: '',
      last_name: '',
      tel: '',
      email: '',
      delivery: 'NP',
      type_np: 'У відділення',
      payment: 'LiqPay Моментальні платежі по всьому світу',
      packing: [],
      message: ''
    },
    shouldUnregister: true
  })
 
  useEffect(()=>{
    setEmpty(cartItems.length > 0)
  }, [cartItems]
  )



  useEffect(()=>{
    if(total !== 0){
      setAmount(total)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]
  )
  const fbPixelPurchase = async()=>{
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.track('Purchase', {
      value: total,
      currency: 'UAH',
      content_ids: cartItems.map(item => item.id),
      content_type: 'product'
      }
    )
  }
  const onSubmit = async(data: TCheckoutFields) => {
    console.log(data)
    const clientId =  getClientId()
    console.log(clientId)
    startTransition( async () => {
      setOfferSubmit(true)
      const productsArr: any = checkoutProducts(cartItems)
      const productsArrGTAG: any = checkoutProductsGtag(cartItems)
      const ProductsAds: any = checkoutProductsAds(cartItems)
      
      
      const emailProductsArr: any = emailProducts(cartItems)
      
      let message = createMessage(data)
      const dataOrder = {
        payment_method: "usd",
        payment_method_title: data.payment,
        set_paid: true,
        billing: {
          first_name: data.first_name,
          last_name: data.last_name,
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "--------",
          country: "",
          email: data.email,
          phone: data.tel,
  
        },
        customer_id: user.id || 0,
        customer_note: message,
        shipping: {
            first_name: "",
            last_name: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
        },
        line_items: productsArr,
        shipping_lines: [
          {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "0"
          }
        ],
        // meta_data: [
        //   {promo: promoVal}
        // ],
        coupon_lines: [
            {code: couponCode || 'default'}
        ]
  
    };
  
    const response = await makeOrder(dataOrder, emailProductsArr, summaryTotal)
      console.log(response)
          
      if(response.message === "Created"){

        if(payment !== 'Оплата при отриманні'){
          toast.success("Ваше замовлення прийнято в обробку! Тепер Ви можете сплатити за замовлення!", {icon: '✅', duration: 8000})
          setOrderIdNumber(response.orderId)

          window.gtag("event", "purchase", {
            transaction_id: response.orderId,
            value: total,
            currency: "UAH",
            coupon: couponCode,
            send_to: 'ga',
            items: productsArrGTAG
        });

        window.gtag('event', 'purchase', {
          'send_to': 'ads',
          'value': total,
          'items': ProductsAds
        });

          
          await fbPixelPurchase()
         await googlePurchaseApi(response.orderId, total, ProductsAds, clientId)
          clearCart()
        }

        if(payment === 'Оплата при отриманні' || payment === ''){
          if(payment === 'Оплата при отриманні') {
              window.gtag("event", "purchase", {
                transaction_id: response.orderId,
                value: total,
                currency: "UAH",
                coupon: couponCode,
                send_to: 'ga',
                items: productsArrGTAG
            });
            window.gtag('event', 'purchase', {
              'send_to': 'ads',
              'value': total,
              'items': ProductsAds
            });

            await fbPixelPurchase()
          }
          
          await googlePurchaseApi(response.orderId, total, ProductsAds, clientId)
          clearCart()
          router.push('/thank')
        }

      }else{
        toast.error("Упс! Щось трапилось..... повторіть пізніше", {icon: '❌'})
      }
    })
   
  }

  return (
    <>
   
    {(orderIdNumber && payment === 'LiqPay Моментальні платежі по всьому світу') ? (

      <div className={cn('flex flex-col items-center px-6 py-14 max-w-[792px] w-full bg-[#fdfbf5] border border-solid border-[#E4E4E4] rounded-[8px]', className)}>
        <h3 className="font-bold text-2xl text-center">Тепер Ви можете сплатити за замовлення онлайн! </h3>
        <LiqPayPay
          amount={lqSummaryTotal.toString()}
          title="Inro Liqpay"
          description="Онлайн оплата замовлення"
          currency="UAH"
          orderId={orderIdNumber}
          disabled={false}
          className="text-white"
        />
      </div>

    ) : (
        <div className={cn('flex max-w-[792px] w-full bg-[#fdfbf5] border border-solid border-[#E4E4E4] rounded-[8px]', className)}>
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} id="checkout-form" className={
                `w-max-[630px] w-full
                ${(!empty || pending) && 'pointer-events-none opacity-60'}`
                }>
                <PersonData />
                <CongratulationWords />
                <Payment />
                <Delivery />
                <Packing />
                <Message />
              </form>
            </FormProvider>
          </div>
    )}
    </>
  )
}


