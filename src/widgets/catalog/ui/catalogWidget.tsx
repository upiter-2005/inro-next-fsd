'use client'
import {AddToCartButton} from "@/features/cartFeatures"
import { ProductCard } from "@/entities/catalogCard"
import { cn } from "@/shared/helpers/cn"

interface ICatalogWidgetProps {
  className?: string,
  items: any[]
}

export const CatalogWidget: React.FC<ICatalogWidgetProps> = ({ className, items }) => {

  return (
    <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto justify-center gap-4')}>

      {items.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          actionSlot={<AddToCartButton productId ={product.id}/>} 
        />

      ))}
    </div>
  )
}