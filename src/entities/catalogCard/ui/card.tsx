import { cn } from "@/shared/helpers/cn"
import {ProductCardPrice} from "@/shared/ui/product/product-card-price"
import {ProductCardName} from "@/shared/ui/product/product-card-name"
import {ProductCardThumb} from "@/shared/ui/product/product-card-thumb"

import {IProduct} from "@/entities/product/model/types"
import { AddToCartButton } from "@/features/cart"
import { AddToFavourite } from "@/features/addToFavourite"
import Link from "next/link"

type CardProduct = Pick<IProduct, 'id' | 'name' | 'images' | 'price' | 'sale_price' | 'slug'>

interface ICardProps {
  className?: string,
  actionSlot?: React.ReactNode,
  product: CardProduct,
  advanceCard?: boolean,
  mobileHideFvourite?: boolean | false
}

export const Card: React.FC<ICardProps> = ({ className, actionSlot, product, advanceCard, mobileHideFvourite }) => {

  return (
    <div className={cn("w-[160px] sm:w-[280px] flex flex-col gap-4  mb-6", className)}>

      <Link href={`/product/${product.slug}`} > <ProductCardThumb image={product.images[0]?.src} alt={product.name} /></Link>
     
      <div className="flex flex-col md:flex-row justify-between md:items-center ">
        <ProductCardName name={product.name} productId={product.slug} />
        <ProductCardPrice salePrice={product.sale_price} regularPrice={product.price} />
      </div>

      {actionSlot}
      {advanceCard && (
        <div className="flex gap-2">
          {<AddToCartButton product={product}  className="w-full md:w-[225px]" />}
          {<AddToFavourite product={product} className="w-[45px] md:w-[55px] hidden md:flex " />}
        </div>
        )
      }

    </div>
  )

}