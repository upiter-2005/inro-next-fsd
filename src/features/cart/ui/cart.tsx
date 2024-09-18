import { cn } from "@/shared/helpers/cn"
import { Button } from "@/shared/ui/button"
import Image from "next/image"
import cart from "@/shared/assets/images/cart.png"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/shared/ui/sheet"

import { CartItem } from "@/entities/cartItem"
import { DeleteFromCart } from "./deleteFromCart"

interface ICartFeaturesProps {
  className?: string
}

export const Cart:React.FC<ICartFeaturesProps> = ({className}) => {
  return (
    <div className={cn(className, '')}>
   
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className={cn("bg-transparent hover:bg-[#f6edcd]")}>
            <Image width={17} height={17} src={cart} alt='Inro'></Image>
          </Button>
        </SheetTrigger>
        <SheetContent  className='w-[412px] overflow-auto px-6 py-16 bg-[#fcf9ee]'> 
          <h3 className="text-[20px]">Кошик</h3>
          <CartItem id={1} name='Парфумована свічка “ARRONE”'  price={755} quantity={1} actionSlot={<DeleteFromCart productId={1}/>} />
        </SheetContent>
      </Sheet>
    </div>
  )
} 









