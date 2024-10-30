'use client'
import { cn } from "@/shared/helpers/cn"
import { Button } from "@/shared/ui/button"
import Image from "next/image"
import cart from "@/shared/assets/images/cart.png"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/shared/ui/sheet"


import { CartList } from "./cartList"
import { useCartStore } from "../model/cartSlice"
import Link from "next/link"
import { useState } from "react"

interface ICartFeaturesProps {
  className?: string
}

export const Cart:React.FC<ICartFeaturesProps> = ({className}) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const {cartItems, total, openCart, setOpen} = useCartStore()
  const count = cartItems.length
  return (
    <div className={cn(className, '')}>

      <Sheet open={openCart} onOpenChange={()=>setOpen(!openCart)} >
        <SheetTrigger asChild >
          <div className="relative">
            <Button size="icon" className={cn("bg-transparent hover:bg-[#f6edcd]")}>
              <Image width={17} height={17} src={cart} alt='Inro'></Image>
            </Button>
            <span className="block text-center text-xs bg-[#111111] pt-[1px] text-white w-4 h-4 rounded-[50%] absolute top-0 right-0">{count}</span>
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









