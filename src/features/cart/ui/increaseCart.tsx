'use client'
import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import {useCartStore} from "@/features/cart/model/cartSlice"

interface IDeleteFromCart {
  className?: string
  productId: number
}

export const IncreaseCart: React.FC<IDeleteFromCart> = ({ className, productId }) => {
  const {increaseFromCart} = useCartStore()
  return (
    <Button onClick={() => increaseFromCart(productId)} size="default" className={cn('py-0 px-2', className)} variant="ghost">
       +
    </Button>
  )
} 