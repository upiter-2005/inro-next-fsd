'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import { useEffect, useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"

interface IOrderItem {
  className?: string
  id: number
  item: any

}
export const OrderItem:React.FC<IOrderItem> = ({className, id, item }) => {
  const [date, setDate] = useState<string>('')

  useEffect(()=>{
    const date = new Date(item.date_created);
    setDate(date.getDate()+'.' + (date.getMonth()+1) + '.'+date.getFullYear())
  }, [])


  return(
    <div className={cn('pb-5 pt-6 border-t-[1px] px-9 border-[#E4E4E4]', className)}>

      <Accordion  type="single" collapsible >
        <AccordionItem value={'order'} className="border-b-0 ">
          <AccordionTrigger className="py-3" name="orderCarret">
            <div className="w-full">
              <p className="text-[18px] flex items-center gap-4 ">
                <span className="font-bold"> № {item.id}</span> <span className="text-sm">{date}</span>
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold capitalize">{item.status}</span>
                <span className="font-bold text-[16px]">₴ {item.total}</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
          {item.line_items.map((product: any, i: number) => (
            <div className='flex gap-3 relative border-b border-[#c6c6c6] py-6' key={i}>
              <div className='w-[48px] h-[60px] overflow-hidden block'>
                <Image src={product.image.src} width={48} height={60} className='rounded-[2px] object-cover min-h-12 w-auto ' alt="Inro" ></Image>
              </div>

              <div className="flex-1">
                <p className="overflow-hidden relative whitespace-nowrap mb-0 flex-1 after:content-[''] after:absolute after:block after:w-[45px] after:h-full
                after:top-0 after:right-0 after:bg-gradient-to-r from-[#FCF9EE00] to-[#FCF9EE] ">{product.name}</p>
                <div className="text-sm font-bold">₴ {product.price}</div>
              </div>

            </div>
          ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}