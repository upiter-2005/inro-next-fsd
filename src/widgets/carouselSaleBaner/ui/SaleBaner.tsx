/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from "@/shared/helpers"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { type CarouselApi } from "@/shared/ui/carousel"
import { useEffect, useState } from "react"
interface ISaleBaner {
  className?: string
}

export const SaleBaner:React.FC<ISaleBaner> = ({className}) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(0)
  useEffect(() => {

    if (!api) {return}

    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api, current])

  return(
      <div className="w-full md:mt-20">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="max-w-[1200px] w-full m-auto rounded-[8px] overflow-hidden"
        >

        <CarouselContent>
          <CarouselItem><img src="/sale.jpeg" className="h-[487px] w-full object-cover" alt="Inro"/></CarouselItem>
          <CarouselItem><img src="/baner.jpeg" className="h-[487px] w-full object-cover" alt="Inro"/></CarouselItem>
          <CarouselItem><img src="/sale.jpeg" className="h-[487px] w-full object-cover" alt="Inro"/></CarouselItem>
        </CarouselContent>

        <div className="flex absolute w-full justify-center items-center bottom-11 gap-3">
        {Array.from({ length: 3 }).map((_, index) =>
          <span key={index} className={cn( "inline-block w-2 h-2 bg-[#C3C3C3] rounded-[50%] cursor-pointer transition-all", {"w-3 h-3 bg-white" : index === current - 1}) } onClick={()=> api?.scrollTo(index)}></span>
         )
        }
        </div>

      </Carousel>
    </div>

  )
}