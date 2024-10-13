'use client'
import { useState } from "react"
import { cn } from "@/shared/helpers"
import { WidgetUserData } from "@/widgets/userData"

interface IWidgetAccount {
  className?: string
}
export const WidgetAccount:React.FC<IWidgetAccount> = ({className}) => {

  const [activeTab, setActiveTab] = useState<string>('profile')

  return (
    <div className="w-full flex flex-wrap items-start justify-between gap-6 pt-[70px] pb-[120px]">
      <div className="max-w-[486px] flex-1 p-14 bg-mramor rounded-[8px] text-white font-light block">

        <p className="text-4xl mb-10">Привіт Василь!</p>

        <button className={cn("block mb-6 text-lg", { "font-bold" : activeTab === 'profile' })} onClick={()=>setActiveTab('profile')}>Профіль</button>
        <button className={cn("block mb-6 text-lg", { "font-bold" : activeTab === 'orders' })} onClick={()=>setActiveTab('orders')}>Замовлення</button>
        <button className={cn("block mb-6 text-lg", { "font-bold" : activeTab === 'favourite' })} onClick={()=>setActiveTab('favourite')}>Обране</button>

        <button className="block mt-10 text-lg">Вийти</button>
      </div>

      <div className="flex-1 flex max-w-[792px] w-full bg-[#fdfbf5] border border-solid border-[#E4E4E4] rounded-[8px]">

        {activeTab === 'profile' && <WidgetUserData />}
      </div>
    </div>
  )
}