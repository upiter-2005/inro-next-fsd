'use client'
import { cn } from "@/shared/helpers/cn"
import { Button } from "@/shared/ui/button"
import Image from "next/image"
import cart from "@/shared/assets/images/cart.svg"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/shared/ui/sheet"
import { sendGAEvent } from '@next/third-parties/google'

import { CartList } from "./cartList"
import { useCartStore } from "../model/cartSlice"
import Link from "next/link"

interface ICartFeaturesProps {
  className?: string
}

export const Cart:React.FC<ICartFeaturesProps> = ({className}) => {
  const {cartItems, total, openCart, setOpen} = useCartStore()
  const count = cartItems.length
  return (
    <div className={cn(className, '')}>

      <Sheet open={openCart} onOpenChange={()=>setOpen(!openCart)} >
        <SheetTrigger asChild >
          <div className="relative">
            <Button size="icon" className={cn("bg-transparent hover:bg-[#f6edcd] px-0 w-auto")}
              // onClick={() => sendGAEvent({ 
              //   event: 'buttonClicked', 
              //   value: 'test',  
              //   currency: "USD", 
              //   items: [
              //     {
              //       item_id: "SKU_12345",
              //       item_name: "Stan and Friends Tee",
              //       affiliation: "Google Merchandise Store",
              //       coupon: "SUMMER_FUN",
              //       discount: 2.22,
              //       index: 0,
              //       item_brand: "Google",
              //       item_category: "Apparel",
              //       item_category2: "Adult",
              //       item_category3: "Shirts",
              //       item_category4: "Crew",
              //       item_category5: "Short sleeve",
              //       item_list_id: "related_products",
              //       item_list_name: "Related Products",
              //       item_variant: "green",
              //       location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
              //       price: 10.01,
              //       quantity: 3
              //     }
              
              //   ]})}

            >
              <Image width={24} height={20} src={cart} alt='Inro'></Image>
            </Button>
            <span className="block text-center text-xs bg-[#111111] pt-[1px] text-white w-4 h-4 rounded-[50%] absolute top-0 -right-2">{count}</span>
          </div>

        </SheetTrigger>
        <SheetContent  className='max-w-[412px] w-full overflow-auto px-6 py-16 bg-[#fcf9ee]'>
          <h3 className="text-[20px]">Кошик</h3>
         <CartList />
        {count > 0 && (
          <>
            <div className="flex justify-between items-center px-[10px] pt-[24px] pb-8">
              <div className="text-sm" >Товари ({count})</div>
              <div className="font-bold">₴ {total}</div>
            </div>
            <SheetClose asChild>
              <Link href="/checkout" className="w-full bg-[#111] text-center text-white block p-3 rounded-sm">Оформити замовлення</Link>
            </SheetClose>

          </>

        )}

        
        </SheetContent>
      </Sheet>
    </div>
  )
}









