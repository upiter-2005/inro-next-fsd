'use client'
import {ProductGallery} from "@/entities/productGallery"
import { IProduct } from "@/entities/product/model/types"
import { SingleProductData } from "@/entities/singleProductData"
import { cn } from "@/shared/helpers"
import { AddToCartButton } from "@/features/cart"
import { AddToFavourite } from "@/features/addToFavourite"
import { CarouselInro } from "@/widgets/carousel"
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro"

interface ISingleProduct {
  product: IProduct,
  className?: string
}
export const SingleProduct:React.FC<ISingleProduct> = ({product, className}) => {
  console.log(product)
  const related_products = product.upsell_ids.join(',')
  const cross_sell_ids = product.cross_sell_ids.join(',')
  if(product){
    return (<>
        <BreadcrumbsInro
          pathsObject={{name:"Каталог", link: "/catalog"}}
          current={product.name}
        />
      <div className={cn(className, 'flex flex-col md:flex-row justify-between gap-9 max-w-[1200px] mx-auto my-6 px-5')}>
        <div className="w-full md:w-[680px]">
          <ProductGallery images={product.images} alt={product.name} />
        </div>
        <div className="w-full md:w-[486px] ">
          <SingleProductData
            product={product}
            addCartAction={<AddToCartButton product={product}  className="w-[225px] flex-1" />}
            addToFavouriteAction={<AddToFavourite product={product} className="w-[55px]" />}
          />
        </div>
      </div>
        <CarouselInro title='Товари з цим ароматом' advanceCard={true} includes={related_products}  />
        <CarouselInro title='Також може сподобатись' advanceCard={false} includes={cross_sell_ids}  />
    </> )
  }


}