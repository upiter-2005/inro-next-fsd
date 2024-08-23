import { cn } from "@/shared/helpers/cn"

import {ProductCardPrice} from "@/shared/ui/product/product-card-price"
import {ProductCardName} from "@/shared/ui/product/product-card-name"
import {ProductCardThumb} from "@/shared/ui/product/product-card-thumb"

import {IProduct} from "@/entities/product/model/types"

type CardProduct = Pick<IProduct, 'id' | 'name' | 'images' | 'price' | 'sale_price'>

interface ICardProps {
  className?: string,
  actionSlot?: React.ReactNode,
  product: CardProduct
}

export const Card: React.FC<ICardProps> = ({ className, actionSlot, product }) => {

  return (
    <div className={cn(className, "w-[156px] flex flex-col gap-4  mb-6")}>

      <ProductCardThumb image={product.images[0].src} alt={product.name} />
      <ProductCardName name={product.name} productId={product.id} />
      
      <ProductCardPrice
        salePrice={product.sale_price}
        regularPrice={product.price}
      />

      {actionSlot}
    </div>
  )

}