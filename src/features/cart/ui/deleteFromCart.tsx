'use client'
import { addToCart } from "@/features/cart/model/actions"
import { cn } from "@/shared/helpers"
import Image from "next/image"
import { Button } from "@/shared/ui/button"

import clear from "@/shared/assets/images/delete.svg"

interface IDeleteFromCart {
  className?: string
  productId: number
}

export const DeleteFromCart: React.FC<IDeleteFromCart> = ({ className, productId }) => {

  return (
    <Button onClick={() => addToCart(productId)} size="default" className={cn('', className)} variant="ghost">
       <Image src={clear} width={26} height={26} alt="delete icon Inro"/>

    </Button>
  )
} 