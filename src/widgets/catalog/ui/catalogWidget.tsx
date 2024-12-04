'use client'
import Image from 'next/image'
import { ProductFilters } from "@/features/filters";

import { ProductCard } from "@/entities/catalogCard"
import { IProduct } from "@/entities/product/model/types";
import { cn } from "@/shared/helpers/cn"
import { Suspense, useEffect } from "react";
import { KeepLine } from "@/widgets/keepLine";
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro"
import useSWRInfinite from "swr/infinite"
import loader from "@/shared/assets/images/loader.svg"
import { sendGAEvent } from '@next/third-parties/google';



export interface ICatalogWidgetProps {
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

export const CatalogWidget: React.FC<ICatalogWidgetProps> = ({ className, items, type, catName, catId }) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const PAGE_SIZE = 12;
  const {
    data,
    mutate,
    size,
    setSize,
    isValidating,
    isLoading
  } = useSWRInfinite(
    (index) =>
      `https://www.api.inro.com.ua/wp-json/wc/v3/products?category=${catId}&per_page=${PAGE_SIZE}&page=${index+1}&consumer_key=${process.env.NEXT_PUBLIC_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_SECRET}`,fetcher);

  const loadedProducts = data ? [].concat(...data) : []
  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)


  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag("event", "view_item_list", {
          'send_to': 'ga',
          'item_list_id': "related_products",
          'item_list_name': "Related products",
          'items': [
            {
              'item_id': catId,
              'item_name': catName,
              'affiliation': "Google Merchandise Store",
              'quantity': 1
            }
          ]
        });
        window.gtag('event', 'view_item_list', {
          'send_to': 'ads',
          
          'items': [
            {
              'id': catId,
              'google_business_vertical': 'retail'
            }
          ]
        });
          
        
      }
    }
  
  }, [])


  return (
    <>
      <BreadcrumbsInro
        current={catName}
      />
    {CatalogType.CATALOG === type && (
       <Suspense fallback={<p>Loading...</p>}>
        <ProductFilters />
      </Suspense>
    )}

      <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto justify-center gap-4')}>
      
        {loadedProducts?.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            advanceCard={true}
          />
        ))}

        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
          className="flex items-center justify-center w-full border border-[#111] bg-[#111] text-white text-sm rounded-[4px] h-12
           transition-all hover:opacity-70"
        >
          {isLoadingMore
            ? ( <Image src={loader} width={50} height={50} alt="loader" />)
            : isReachingEnd
            ? "Всі товари завантажені"
            : "Показати ще"}
        </button>
      </div>



      <KeepLine />
    </>

  )
}