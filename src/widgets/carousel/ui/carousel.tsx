'use client'
import { ProductCard } from "@/entities/catalogCard"
import { IProduct } from "@/entities/product/model/types"
import { cn } from "@/shared/helpers"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { fetcher } from "@/widgets/singleProduct/helpers/fetcher"
import useSWR from "swr"

interface ICarousel {
  className?: string,
  title: string,
  relativeCat?: string
}

export const CarouselInro:React.FC<ICarousel> = ({className, title, relativeCat}) => {
  
  const { data, error, isLoading } = useSWR<IProduct[]>(`https://www.inro.com.ua/wp-json/wc/v3/products/?per_page=20&consumer_key=ck_7d0a0a541e4fc91baf8b23e22031cf8502c76b24
    &consumer_secret=cs_84669f4a9e954e566d4817d059786263b9a05ef7`, fetcher)
  return(
    <div className={cn('flex justify-center items-center flex-col gap-9 max-w-[1200px] mx-auto py-[80px]', className)}>
      <h2 className="text-4xl text-left w-full">{title}</h2>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full "
        >
        <CarouselContent>
          {data?.map((obj, i) => (
            <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ProductCard  product={obj} advanceCard={true}  />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> 
      </div>
    </div>
  )
}