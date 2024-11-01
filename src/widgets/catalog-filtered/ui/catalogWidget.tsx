'use client'
import Image from 'next/image'
import { ProductFilters } from "@/features/filters";
import {AddToCartButton} from "@/features/cart"
import { ProductCard } from "@/entities/catalogCard"
import { IProduct } from "@/entities/product/model/types";
import { cn } from "@/shared/helpers/cn"
import { Suspense } from "react";
import { KeepLine } from "@/widgets/keepLine";
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro"


export interface ICatalogFilteredWidget {
  className?: string,
  items: IProduct[],
  type: string,
  catName: string,
  catId?: number
}

export enum CatalogType {
  CATALOG = 'catalog',
  CATEGORY_PAGE = 'category'
}

export const CatalogFilteredWidget: React.FC<ICatalogFilteredWidget> = ({ className, items, type, catName, catId }) => {
  return (
    <>
    <div className='max-w-[1200px] w-full my-0 mx-auto flex justify-between'>
      <BreadcrumbsInro
          current={catName}
        />
      <div className='flex justify-end pr-4'>
        {CatalogType.CATALOG === type && (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductFilters />
          </Suspense>
        )}
      </div>
      
    </div>

      <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto justify-center gap-4')}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            advanceCard={true}
          />
        ))}
      </div>



      <KeepLine />
    </>

  )
}