'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import {ICartItem} from "@/entities/cartItem/model/types"



export const CartItem:React.FC<ICartItem> = ({className, id, name, image, price, quantity, actionSlot, increaseSlot, decreaseSlot}) => {
  return(
    <div className={cn('pb-5 pt-6 border-b-[1px] border-[#E4E4E4]', className)}>
        <div className='flex gap-3 relative'>
          <div className='w-[48px] h-[60px] overflow-hidden block'>
            <Image src={image} width={48} height={60} className='rounded-[2px] object-cover min-h-12 w-auto ' alt="Inro" ></Image>
          </div>
       
          <p className="overflow-hidden relative whitespace-nowrap flex-1">{name}</p>
          {actionSlot}
        </div>
        <div className="flex justify-between">
          <div>{decreaseSlot} {quantity} {increaseSlot}</div>
          <div className="text-sm font-medium">₴ {price}</div>
        </div>
    </div>
  )
}