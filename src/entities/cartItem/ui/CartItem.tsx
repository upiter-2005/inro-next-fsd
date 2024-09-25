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
       
          <p className="overflow-hidden relative whitespace-nowrap flex-1 after:content-[''] after:absolute after:block after:w-[45px] after:h-full
          after:top-0 after:right-0 after:bg-gradient-to-r from-[#FCF9EE00] to-[#FCF9EE] ">{name}</p>
          {actionSlot}
        </div>
        <div className="flex justify-between items-center px-[10px]">
          <div className="flex justify-between items-center">{decreaseSlot} {quantity} {increaseSlot}</div>
          <div className="text-sm font-bold">₴ {price}</div>
        </div>
    </div>
  )
}