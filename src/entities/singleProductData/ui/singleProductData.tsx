'use client'
import { IProduct } from "@/entities/product/model/types"
import { cn } from "@/shared/helpers"
import { useGetCategories } from "../hooks/useGetCategiries"
import { ProductCategoryTags } from "@/shared/ui/product/product-category-tags"
type ProductDataType = Pick<IProduct,'id' | 'name' | 'categories' | 'price' | 'short_description'>

interface ISingleProductData{
  className?: string
  product: ProductDataType
  addCartAction: React.ReactNode
  addToFavouriteAction: React.ReactNode
}

export const SingleProductData:React.FC<ISingleProductData> = ({className, product, addCartAction, addToFavouriteAction }) =>{
  const {items: categories} = useGetCategories(product.categories)
  return <div className={cn(className, 'flex flex-col gap-6 font-light')}>
  
      <h1 className="font-light text-[36px] leading-9">{product.name}</h1>
      <div className="flex gap-[10px]">
        <ProductCategoryTags categories={categories} />
      </div>
      <div dangerouslySetInnerHTML={{__html: product.short_description}} className="leading-5"></div>
      <div className="text-2xl font-semibold tracking-wide">₴ {product.price}</div>
      <div className="flex gap-2">
        {addCartAction}
        {addToFavouriteAction}
      </div>
      
  </div>
}