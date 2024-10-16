import {ProductGallery} from "@/entities/productGallery"
import { IProduct } from "@/entities/product/model/types"
import { SingleProductData } from "@/entities/singleProductData"
import { cn } from "@/shared/helpers"
import { AddToCartButton } from "@/features/cart"
import { AddToFavourite } from "@/features/addToFavourite"
import { CarouselInro } from "@/widgets/carousel"

interface ISingleProduct {
  product: IProduct,
  className?: string
}
export const SingleProduct:React.FC<ISingleProduct> = ({product, className}) => {

  if(product){
    return (<>
      <div className={cn(className, 'flex justify-between gap-9 max-w-[1200px] mx-auto my-6')}>
        <div className="w-[680px]">
          <ProductGallery images={product.images} alt={product.name} />
        </div>
        <div className="w-[486px] ">
          <SingleProductData
            product={product}
            addCartAction={<AddToCartButton product={product}  className="w-[225px] flex-1" />}
            addToFavouriteAction={<AddToFavourite product={product} className="w-[55px]" />}
          />
        </div>
      </div>
        <CarouselInro title='Товари з цим армоатом' advanceCard={true} />
        <CarouselInro title='Також може сподобатись' advanceCard={false}  />
    </> )
  }


}