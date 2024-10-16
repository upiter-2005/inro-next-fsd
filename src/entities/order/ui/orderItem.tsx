'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import {ICartItem} from "@/entities/cartItem/model/types"
interface IOrederItem {
  className?: string
  id: number
  name: string
  image: string
  price: number
  actionSlot: React.ReactNode
}
export const OrderItem:React.FC<IOrederItem> = ({className, id, name, image, price, actionSlot}) => {
  return(
    <div className={cn('pb-5 pt-6 border-b-[1px] border-[#E4E4E4]', className)}>
     OrderItem
    </div>
  )
}