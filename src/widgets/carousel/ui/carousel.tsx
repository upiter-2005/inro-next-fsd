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

/**
 * advanceCard: (boolean) whether card has AddToCartButton & AddToFavourite
 */
interface ICarousel {
  className?: string,
  title: string,
  advanceCard: boolean,
  includes?: string
}

export const CarouselInro:React.FC<ICarousel> = ({className, title, advanceCard, includes}) => {
console.log(includes)
  const { data, error, isLoading } = useSWR<IProduct[]>(
    `https://www.api.inro.com.ua/wp-json/wc/v3/products/?${includes ? `include=${includes}` : 'per_page=20'}&consumer_key=ck_7d0a0a541e4fc91baf8b23e22031cf8502c76b24
    &consumer_secret=cs_84669f4a9e954e566d4817d059786263b9a05ef7`, fetcher)
  return(
    <div className={cn('w-full flex justify-center items-center flex-col gap-9 max-w-[1200px] mx-auto py-[80px] pl-6', className)}>
      <h2 className="text-[20px] md:text-4xl text-left w-full">{title}</h2>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
        <CarouselContent>
          {data?.map((obj, i) => (
            <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ProductCard  product={obj} advanceCard={true} className="" />
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