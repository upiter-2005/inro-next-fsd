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
  price?: number
  name?: string
}

export const DeleteFromCart: React.FC<IDeleteFromCart> = ({ className, productId, invert, price, name }) => {
  const {removeItem} = useCartStore()

  const removeHandler = () => {
    removeItem(productId)
    window.gtag("event", "remove_from_cart", {
      currency: "UAH",
      value: price,
      items: [
        {
          item_id: productId,
          item_name: name,
          affiliation: "Google Merchandise Store",
          price: price,
          quantity: 1
        }
      ]
    });
    
  }

  if(productId === 2217 || productId === 2215 || productId === 2213) return true

    return (
    
    <Button onClick={removeHandler} size="default" className={cn('py-0 px-2', className)} variant="ghost">
      <Image src={clear} width={22} height={22} className={cn("relative -top-2", {'invert': invert})} alt="delete icon Inro"/>
    </Button>
  )
}