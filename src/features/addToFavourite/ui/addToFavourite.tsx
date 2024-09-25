'use client'
import { cn } from "@/shared/helpers"
import { Bookmark } from "lucide-react"
interface IAddToFavourite {
  className?: string,
  productId: number
}


export const AddToFavourite:React.FC<IAddToFavourite> = ({className, productId}) => {
  return <div 
  className={cn(className, 'rounded border-[#111] border-[1px] flex items-center justify-center cursor-pointer')}
  onClick={() => {console.log(productId)}}
  >
    <Bookmark width={24}/>
  </div>
}