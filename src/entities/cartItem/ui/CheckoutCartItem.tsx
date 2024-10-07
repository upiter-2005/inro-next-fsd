'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import {ICartItem} from "@/entities/cartItem/model/types"

export const CheckoutCartItem:React.FC<ICartItem> = ({className, name, image, price, quantity, actionSlot}) => {
  return(
    <div className={cn('pb-5 pt-6 border-b-[1px] border-[#444]', className)}>
        <div className='flex gap-3 relative'>

          <div className='w-[48px] h-[60px] overflow-hidden block'>
            <Image src={image} width={48} height={60} className='rounded-[2px] object-cover min-h-12 w-auto ' alt="Inro" ></Image>
          </div>

          <div className="flex-1 max-w-[200px]">
            <p className="text-white overflow-hidden relative whitespace-nowrap flex-1 after:content-[''] after:absolute after:block after:w-[45px] after:h-full
            after:top-0 after:right-0 after:bg-gradient-to-r from-[#22222200] to-[#222222] ">{name}</p>
            <div className="text-sm text-white font-bold">₴ {price}</div>
          </div>

          {actionSlot}
        </div>

    </div>
  )
}