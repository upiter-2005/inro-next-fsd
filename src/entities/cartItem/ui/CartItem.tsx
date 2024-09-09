'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import {ICartItem} from "@/entities/cartItem/model/types"
import demoImg from "@/shared/assets/images/prod.png"


export const CartItem:React.FC<ICartItem> = ({className, id, name, image, price, quantity}) => {
  return(
    <div className={cn('', className)}>
        <div className='flex gap-3 relative'>
          <Image src={demoImg} width={48} height={48} alt="Inro" className='rounded-[2px] object-cover' ></Image>
          <p>{name}</p>
        </div>
    </div>
  )
}