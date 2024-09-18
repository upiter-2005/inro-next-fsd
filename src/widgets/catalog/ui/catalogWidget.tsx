'use client'
import { ProductFilters } from "@/features/filters";
import {AddToCartButton} from "@/features/cart"
import { ProductCard } from "@/entities/catalogCard"
import { IProduct } from "@/entities/product/model/types";
import { cn } from "@/shared/helpers/cn"
import { Suspense } from "react";


export interface ICatalogWidgetProps {
  className?: string,
  items: IProduct[],
  type: string
}

export enum CatalogType {
  CATALOG = 'catalog',
  CATEGORY_PAGE = 'category'
}

export const CatalogWidget: React.FC<ICatalogWidgetProps> = ({ className, items, type }) => {
 
  return (
    <>
    {CatalogType.CATALOG === type && (
       <Suspense fallback={<p>Loading...</p>}>
        <ProductFilters />
      </Suspense>
    )}
      
      <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto justify-center gap-4')}>
        {items.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            actionSlot={<AddToCartButton productId={product.id}/>} 
          />
        ))}
      </div>

    </>
    
  )
}