'use client'
import { addToCart } from "@/features/cart/model/actions"
import { cn } from "@/shared/helpers"
import Image from "next/image"
import { Button } from "@/shared/ui/button"

import clear from "@/shared/assets/images/delete.svg"
import {useCartStore} from "@/features/cart/model/cartSlice"

interface IDeleteFromCart {
  className?: string
  productId: number
}

export const DeleteFromCart: React.FC<IDeleteFromCart> = ({ className, productId }) => {
  const {removeItem} = useCartStore()
  return (
    <Button onClick={() => removeItem(productId)} size="default" className={cn('py-0 px-2', className)} variant="ghost">
       <Image src={clear} width={22} height={22} className="relative -top-2" alt="delete icon Inro"/>
    </Button>
  )
} 