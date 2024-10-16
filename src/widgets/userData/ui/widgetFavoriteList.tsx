'use client'
import { cn } from "@/shared/helpers"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useFavouriteStore } from "@/features/favourite/model/favouriteSlice"
import { FavouriteItem } from "@/entities/favouriteItem"
import { AddToCart } from "@/features/cart/ui/addToCart"
import { DeleteFromFavourite } from "@/features/addToFavourite/ui/delteFromFavourite"

interface IWidgetFavouriteList {
  className?: string,
}
export const WidgetFavouriteList:React.FC<IWidgetFavouriteList> = ({className}) => {
const {favouritesItems} = useFavouriteStore()

  return (
    <div className={cn('py-8 border-b border-b-solid border-b-[#E4E4E4] w-full', className)}>
      <div className="flex justify-between py-6 px-9"><Subtitle text="Обране" className="font-bold" /> <div>({favouritesItems.length})</div></div>

      <div className={className}>
      {favouritesItems.map((item, i) => (
          <FavouriteItem
            key={i}
            id={item.id}
            name={item.name}
            price={item.price}
            images={item.image}
            actionSlot={<AddToCart product={{id:item.id, name: item.name, price: item.price.toString(), images: item.image}}  className="px-11" />}
            deleteFromFavourite={<DeleteFromFavourite product={{id:item.id, name: item.name, price: item.price.toString(), images: item.image}}/>}
          />
        ) )}
    </div>
  </div>
  )
}