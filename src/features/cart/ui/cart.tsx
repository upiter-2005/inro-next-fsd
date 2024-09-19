'use client'
import { cn } from "@/shared/helpers/cn"
import { Button } from "@/shared/ui/button"
import Image from "next/image"
import cart from "@/shared/assets/images/cart.png"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/shared/ui/sheet"


import { CartList } from "./cartList"
import { useCartStore } from "../model/cartSlice"

interface ICartFeaturesProps {
  className?: string
}

export const Cart:React.FC<ICartFeaturesProps> = ({className}) => {
  const {cartItems} = useCartStore() 
  const count = cartItems.length
  return (
    <div className={cn(className, '')}>
   
      <Sheet>
        <SheetTrigger asChild>
          <div className="relative">
            <Button size="icon" className={cn("bg-transparent hover:bg-[#f6edcd]")}>
              <Image width={17} height={17} src={cart} alt='Inro'></Image>
            </Button>
            <span className="block text-center text-xs bg-[#111111] pt-[1px] text-white w-4 h-4 rounded-[50%] absolute top-0 right-0">{count}</span>
          </div>
          
        </SheetTrigger>
        <SheetContent  className='w-[412px] overflow-auto px-6 py-16 bg-[#fcf9ee]'> 
          <h3 className="text-[20px]">Кошик</h3>
         <CartList />
        </SheetContent>
      </Sheet>
    </div>
  )
} 









