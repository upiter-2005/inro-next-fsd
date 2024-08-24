'use client'
import { ProductFilters } from "@/features/filters";
import {AddToCartButton} from "@/features/cartFeatures"
import { ProductCard } from "@/entities/catalogCard"
import { cn } from "@/shared/helpers/cn"
// import { useRouter } from "next/navigation";

interface ICatalogWidgetProps {
  className?: string,
  items: any[],
  attributes: any[]
}

export const CatalogWidget: React.FC<ICatalogWidgetProps> = ({ className, items, attributes }) => {

  // const router = useRouter()
  // router.push('/product/5555')

  // console.log(router);
  
  return (
    <>
      <ProductFilters attributes={attributes} />
     
      <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto justify-center gap-4')}>
      {items.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          actionSlot={<AddToCartButton productId ={product.id}/>} 
        />
      ))}
    </div>
    </>
    
  )
}