'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
interface IFavouriteItem {
  className?: string
  id: number
  name: string
  images: string
  price: number
  actionSlot: React.ReactNode
  deleteFromFavourite: React.ReactNode
}
export const FavouriteItem:React.FC<IFavouriteItem> = ({className, id, name, images, price, actionSlot, deleteFromFavourite}) => {
  return(
    <div className={cn('pb-5 pt-6 border-t-[1px] px-9 border-[#E4E4E4]', className)}>
      <div className='flex gap-3 relative'>
        <div className='w-[48px] h-[60px] overflow-hidden block'>
          <Image src={images} width={48} height={60} className='rounded-[2px] object-cover min-h-12 w-auto ' alt="Inro" ></Image>
        </div>

        <div>
          <p className="overflow-hidden relative whitespace-nowrap flex-1 after:content-[''] after:absolute after:block after:w-[45px] after:h-full
          after:top-0 after:right-0 after:bg-gradient-to-r from-[#FCF9EE00] to-[#FCF9EE] ">{name}</p>
          <div className="text-sm font-bold">₴ {price}</div>
        </div>
        {deleteFromFavourite}
      </div>
      <div className="flex justify-between items-center px-[10px]">
        {actionSlot}

      </div>
    </div>
  )
}