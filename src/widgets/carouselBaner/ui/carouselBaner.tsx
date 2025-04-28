/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from "@/shared/helpers"
import { useWindowDimensions } from "@/shared/hooks/useWindowDemensions"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { type CarouselApi } from "@/shared/ui/carousel"
import Link from "next/link"
import { useEffect, useState } from "react"
interface ICarouselBanerInro {
  className?: string
}

export const CarouselBanerInro:React.FC<ICarouselBanerInro> = ({className}) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(0)
  const{isMobile} = useWindowDimensions()
  useEffect(() => {

    if (!api) {return}

    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api, current])

  return(
      <div className="w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
        {!isMobile && 
          <CarouselContent>
            
            {/* <CarouselItem>
            <Link href="/catalog">
              <img src="https://www.api.inro.com.ua/wp-content/uploads/2025/04/1-2.png" className="h-[813px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem> */}
            <CarouselItem>
            <Link href="/category/bordeaux">
              <img src="https://www.api.inro.com.ua/wp-content/uploads/2025/02/1-2.jpg" className="h-[813px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/catalog?pa_noty=237">
              <img src="https://www.api.inro.com.ua/wp-content/uploads/2025/03/1-7-scaled.jpg" className="h-[813px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/category/dly-domu">
              <img src="https://www.api.inro.com.ua/wp-content/uploads/2024/11/Frame-106-3.png" className="h-[813px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem>
          
          </CarouselContent>
        }

        {isMobile && 
          <CarouselContent>
             {/* <CarouselItem>
            <Link href="/catalog">
              <img src="https://www.api.inro.com.ua/wp-content/uploads/2025/04/2-3.png" className="h-[653px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem> */}
            <CarouselItem>
            <Link href="/category/bordeaux">
              <img src="https://www.api.inro.com.ua/wp-content/uploads/2025/02/2-2.jpg" className="h-[653px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/catalog?pa_noty=237">
              <img src="https://www.api.inro.com.ua/wp-content/uploads/2025/03/2-5.jpg" className="h-[653px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href="/category/dly-domu">
             <img src="https://www.api.inro.com.ua/wp-content/uploads/2024/11/iPhone-16-8.png" className="h-[653px] w-full object-cover" alt="Inro"/>
            </Link>
          </CarouselItem>
         
          </CarouselContent>
        }

        

        {!isMobile && <>
          <CarouselPrevious className="!right-2/4 top-2/4  -translate-x-[500px] border-white bg-transparent" />
          <CarouselNext className="left-2/4 top-2/4  translate-x-[500px] border-white bg-transparent" />
        </>}


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