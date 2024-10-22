'use client'
import { cn } from "@/shared/helpers/cn"
import { useCartStore } from "../../model/cartSlice"
import Link from "next/link"
import { CheckoutCartList } from "./checkout-cart-list"
import { Button } from "@/shared/ui/button"
import { LiqPayPay } from "@/shared/ui/form/liqpay"

interface ICheckoutCart {
  className?: string
}

export const CheckoutCart: React.FC<ICheckoutCart> = ({ className }) => {

  const { cartItems, total } = useCartStore()
  const count = cartItems.length

  return (
    <div className={cn('flex-1 bg-[#222] px-9 py-12 rounded-[8px]', className)}>
      <p className="text-white">Кошик</p>
      <CheckoutCartList />
      {cartItems.length && (
        <>
          <div className="flex justify-between items-center px-[10px] pt-4 pb-4 border-b-[1px] border-[#444]">
              <div className="text-sm text-white" >Товари ({count})</div>
              <div className="font-bold text-white">₴ {total}</div>
            </div>
            <div className="flex justify-between items-center px-[10px] pt-4 pb-4 border-b-[1px] border-[#444]">
              <div className="text-sm text-white" >Доставка </div>
              <div className="font-bold text-white">₴ 57</div>
            </div>
            <Button type="submit" form="checkout-form" className="w-full bg-white text-center text-[#111] text-sm block p-3 rounded-sm hover:bg-white hover:text-[#111] transition-all hover:opacity-70">Оформити замовлення</Button>
            <LiqPayPay
              amount="37"
              title="Inro payment"
              description="Payment for product"
              currency="UAH"
              orderId={Math.floor(1 + Math.random() * 900000000)}
              disabled={false}
              className="text-white "
            />
        </>

      )}

    </div>
  )
}
