'use client'
import {ProductGallery} from "@/entities/productGallery"
import { IProduct } from "@/entities/product/model/types"
import { SingleProductData } from "@/entities/singleProductData"
import { cn } from "@/shared/helpers"
import { AddToCartButton } from "@/features/cart"
import { AddToFavourite } from "@/features/addToFavourite"

interface ISingleProduct {
  product: IProduct,
  className?: string
}
export const SingleProduct:React.FC<ISingleProduct> = ({product, className}) => {


  if(product){
    return <div className={cn(className, 'flex justify-between gap-9 max-w-[1200px] mx-auto my-6')}>

    <div className="w-[680px]">
      <ProductGallery images={product.images} alt={product.name} />
    </div>
    <div className="w-[486px] ">
      <SingleProductData 
        product={product}
        addCartAction={<AddToCartButton productId={product.id} className="w-[225px]" />}
        addToFavouriteAction={<AddToFavourite productId={product.id} className="w-[55px]" />}
      />
    </div>
   
  </div>;
  }
  
  
}