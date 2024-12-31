'use client'
import { cn } from "@/shared/helpers/cn"
import { useCartStore } from "../../model/cartSlice"
import { CheckoutCartList } from "./checkout-cart-list"
import { Button } from "@/shared/ui/button"
import Image from 'next/image'
import { useCheckoutStore } from "@/features/formCheckout/model/checkoutSlice"
import { Coupon } from "../coupon"
import { useCountDiscountPrice } from "../../hooks/useCountDiscountPrice"
import loader from "@/shared/assets/images/loader.svg"

interface ICheckoutCart {
  className?: string
  coupons: any[]
}

export const CheckoutCart: React.FC<ICheckoutCart> = ({ className, coupons }) => {
  const { cartItems, total, discountAmount, discountType } = useCartStore()
  const {payment, orderIdNumber, offerSubmit, setOfferSubmit} = useCheckoutStore()
  
 

  const {summaryTotal} = useCountDiscountPrice()
  const count = cartItems.length

  return (
    <div className={cn('flex-1 bg-[#222] px-9 py-12 rounded-[8px]', className)}>
 
      <p className="text-white">Кошик</p>
      <CheckoutCartList  />
      {cartItems.length && (
        <>
          <div className="flex justify-between items-center px-[10px] pt-4 pb-4 border-b-[1px] border-[#444]">
              <div className="text-sm text-white" >Товари ({count})</div>
              <div className="font-bold text-white">₴ {total}</div>
            </div>
            
            <div className="flex justify-between items-center px-[10px] pt-4 pb-4 border-b-[1px] border-[#444]">
              <div className="text-sm text-white" >Всього: </div>
              <div className="font-bold text-white">₴ {summaryTotal}</div>
            </div>

        
              {discountType && (
                <div className="text-white pt-6">-{discountAmount}
                  {discountType === 'percent' ? '%' : ' UAH'}
                </div>
              )}
            
            <Coupon coupons={coupons} />
            {(payment !== 'Оплата при отриманні' && orderIdNumber) ?
              (<Button className="w-full bg-white text-center text-[#111] text-sm block p-3 rounded-sm hover:bg-white hover:text-[#111] transition-all hover:opacity-70" >Продовжити покупки</Button>)
              :
              ( <Button type="submit" disabled={offerSubmit} form="checkout-form" className={`w-full ${offerSubmit ? 'bg-[#666]' : 'bg-white'}  text-center text-[#111] text-sm block p-3 rounded-sm hover:bg-white hover:text-[#111] transition-all hover:opacity-70`}>
                {offerSubmit ?  <div className="w-full text-center flex justify-center relative -top-4"><Image src={loader} width={50} height={50} alt="loader" /> </div> : 'Оформити замовлення'}
                
                </Button>)
            }
        </>

      )}


    </div>
  )
}
