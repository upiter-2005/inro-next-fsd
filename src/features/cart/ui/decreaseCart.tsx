'use client'
import Image from"next/image"
import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import {useCartStore} from "@/features/cart/model/cartSlice"
import minus from "@/shared/assets/images/minus.svg"

interface IDeleteFromCart {
  className?: string
  productId: number
}

export const DecreaseCart: React.FC<IDeleteFromCart> = ({ className, productId }) => {
  const {decreaseFromCart} = useCartStore()
  return (
    <Button onClick={() => decreaseFromCart(productId)} size="default" className={cn('py-0 px-2 ', className)} variant="ghost">
       <Image src={minus} width={10} height={10} alt="minus icon"></Image>
    </Button>
  )
} 