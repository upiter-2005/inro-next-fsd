'use client'
import { IProduct } from "@/entities/product/model/types"
import { useFavouriteStore } from "@/features/favourite/model/favouriteSlice"
import { cn } from "@/shared/helpers"
import Image from "next/image"
import { useEffect, useState } from "react"

import clear from "@/shared/assets/images/delete.svg"

type ProductDataType = Pick<IProduct,'id' | 'name' | 'price' | 'images' >

interface IDeleteFromFavourite {
  className?: string
  product: ProductDataType
}

export const DeleteFromFavourite:React.FC<IDeleteFromFavourite> = ({className, product}) => {
  const[active, setActive] = useState<boolean>(false)
  const {favouritesItems, handleFavouriteItem} = useFavouriteStore()


  useEffect(()=>{
    const isActive = favouritesItems.find(item => item.id === product.id)
    if(isActive) {setActive(true)}else{setActive(false)}
  }, [favouritesItems])


  return <div
  className={cn(className, 'cursor-pointer absolute top-0 right-0')}
  onClick={() => handleFavouriteItem({
    id: product.id,
    name : product.name,
    image: product.images[0].src,
    price: Number(product.price)
  })}
  >
    <Image src={clear} width={20} height={20} alt="delete favourite" />
  </div>
}