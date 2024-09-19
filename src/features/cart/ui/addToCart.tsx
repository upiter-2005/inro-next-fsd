import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import { useCartStore } from "@/features/cart/model/cartSlice"
import { IProduct } from "@/entities/product/model/types"

type ProductDataType = Pick<IProduct,'id' | 'name' | 'price' | 'images' >

interface IAddToCartProps {
  className?: string
  product: ProductDataType
}

export const AddToCart: React.FC<IAddToCartProps> = ({ className, product }) => {
  const {addCartItem} = useCartStore()

  return (
    <Button 
      onClick={() => addCartItem({
        id: product.id,
        name : product.name,
        image: product.images[0].src,
        price: product.price,
      })} 
      size="default" 
      className={cn('text-[14px] bg-black rounded', className)}
    >В кошик</Button>
  )
} 