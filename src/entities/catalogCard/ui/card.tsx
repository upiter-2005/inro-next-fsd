import { cn } from "@/shared/helpers/cn"
import {ProductCardPrice} from "@/shared/ui/product/product-card-price"
import {ProductCardName} from "@/shared/ui/product/product-card-name"
import {ProductCardThumb} from "@/shared/ui/product/product-card-thumb"

import {IProduct} from "@/entities/product/model/types"
import { AddToCartButton } from "@/features/cart"
import { AddToFavourite } from "@/features/addToFavourite"

type CardProduct = Pick<IProduct, 'id' | 'name' | 'images' | 'price' | 'sale_price' | 'slug'>

interface ICardProps {
  className?: string,
  actionSlot?: React.ReactNode,
  product: CardProduct,
  advanceCard?: boolean
}

export const Card: React.FC<ICardProps> = ({ className, actionSlot, product, advanceCard }) => {

  return (
    <div className={cn("w-[160px] sm:w-[260px] flex flex-col gap-4  mb-6", className)}>

      <ProductCardThumb image={product.images[0].src} alt={product.name} />
      <ProductCardName name={product.name} productId={product.slug} />
      <ProductCardPrice salePrice={product.sale_price} regularPrice={product.price} />

      {actionSlot}   

      {advanceCard && (
        <div className="flex gap-2">
          {<AddToCartButton product={product}  className="w-[225px]" />}
          {<AddToFavourite productId={product.id} className="w-[55px]" />}
        </div>)
      }
      
    </div>
  )

}