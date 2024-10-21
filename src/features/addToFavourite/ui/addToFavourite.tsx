'use client'
import { IProduct } from "@/entities/product/model/types"
import { useFavouriteStore } from "@/features/favourite/model/favouriteSlice"
import { cn } from "@/shared/helpers"
import { Bookmark } from "lucide-react"
import { useEffect, useState } from "react"

type ProductDataType = Pick<IProduct,'id' | 'name' | 'price' | 'images' >

interface IAddToFavouriteProps {
  className?: string
  product: ProductDataType
}

export const AddToFavourite:React.FC<IAddToFavouriteProps> = ({className, product}) => {
  const[active, setActive] = useState<boolean>(false)
  const {favouritesItems, handleFavouriteItem} = useFavouriteStore()


  useEffect(()=>{
    const isActive = favouritesItems.find(item => item.id === product.id)
    if(isActive) {setActive(true)}else{setActive(false)}
  }, [favouritesItems])


  return <div
  className={cn( 'rounded border-[#111] border-[1px] flex items-center justify-center cursor-pointer', {"bg-[#111]": active}, className)}
  onClick={() => handleFavouriteItem({
    id: product.id,
    name : product.name,
    image: product.images[0].src,
    price: Number(product.price)
  })}
  >
    <Bookmark width={24} className={cn('', {"text-white": active})} />
  </div>
}