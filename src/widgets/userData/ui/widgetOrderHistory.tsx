'use client'
import { cn } from "@/shared/helpers"
import { Subtitle } from "@/shared/ui/form/subtitle"
import { useFavouriteStore } from "@/features/favourite/model/favouriteSlice"
import { OrderItem } from "@/entities/orderItem"

interface IWidgetOrderHistory {
  className?: string,
  orders: any[] | undefined
}
export const WidgetOrderHistory:React.FC<IWidgetOrderHistory> = ({className, orders}) => {
const {favouritesItems} = useFavouriteStore()

  return (
    <div className={cn('py-8 border-b border-b-solid border-b-[#E4E4E4] w-full', className)}>
      <div className="flex justify-between py-6 px-9"><Subtitle text="Мої замовлення" className="font-bold" /> <div>({orders?.length})</div></div>

      <div className={className}>
      {(orders) ? (orders?.map((item, i) => (
          <OrderItem
            key={i}
            id={item.id}
            item={item}
          />
        ) )) :
          <p>Вище ще не зробили замовлення</p>
      }
    </div>
  </div>
  )
}