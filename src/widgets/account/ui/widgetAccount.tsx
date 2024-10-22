'use client'
import { useState } from "react"
import { cn } from "@/shared/helpers"
import { WidgetFavouriteList, WidgetUserData } from "@/widgets/userData"
import { logOut } from "@/app/actions"
import { useUserStore } from "@/features/loginUser/model/actions"
import { WidgetOrderHistory } from "@/widgets/userData/ui/widgetOrderHistory"
import useSWR from 'swr'
import { fetcher } from "@/features/filters/helpers/fetcher"

interface IWidgetAccount {
  className?: string
}
export const WidgetAccount:React.FC<IWidgetAccount> = ({className}) => {
  const {clearUser, user} = useUserStore()
  const [activeTab, setActiveTab] = useState<string>('profile')

  const logoutUser = async() => {
    await logOut()
    clearUser()
  }

const { data, error, isLoading } = useSWR<any[]>(`https://www.api.inro.com.ua/wp-json/wc/v3/orders?customer=${user.id}&consumer_key=ck_7d0a0a541e4fc91baf8b23e22031cf8502c76b24
  &consumer_secret=cs_84669f4a9e954e566d4817d059786263b9a05ef7`, fetcher)
  console.log(data);
  return (
    <div className="w-full flex flex-wrap items-start justify-between gap-6 pt-[70px] pb-[120px]">
      <div className="max-w-[486px] flex-1 p-14 bg-mramor rounded-[8px] text-white font-light block">

        <p className="text-4xl mb-10">Привіт {user.name}!</p>

        <button className={cn("block mb-6 text-lg", { "font-bold" : activeTab === 'profile' })} onClick={()=>setActiveTab('profile')}>Профіль</button>
        <button className={cn("block mb-6 text-lg", { "font-bold" : activeTab === 'orders' })} onClick={()=>setActiveTab('orders')}>Замовлення</button>
        <button className={cn("block mb-6 text-lg", { "font-bold" : activeTab === 'favourite' })} onClick={()=>setActiveTab('favourite')}>Обране</button>

        <button className="block mt-10 text-lg" onClick={logoutUser}>Вийти</button>
      </div>

      <div className="flex-1 flex max-w-[792px] w-full bg-[#fdfbf5] border border-solid border-[#E4E4E4] rounded-[8px]">

        {activeTab === 'profile' && <WidgetUserData user={user} />}
        {activeTab === 'favourite' && <WidgetFavouriteList  />}
        {activeTab === 'orders' && <WidgetOrderHistory orders={data}  />}
      </div>
    </div>
  )
}