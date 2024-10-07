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
  invert?: boolean
}

export const DeleteFromCart: React.FC<IDeleteFromCart> = ({ className, productId, invert }) => {
  const {removeItem} = useCartStore()
  return (
    <Button onClick={() => removeItem(productId)} size="default" className={cn('py-0 px-2', className)} variant="ghost">
      <Image src={clear} width={22} height={22} className={cn("relative -top-2", {'invert': invert})} alt="delete icon Inro"/>
    </Button>
  )
}