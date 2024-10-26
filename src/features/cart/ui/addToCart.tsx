'use client'
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
  const {addCartItem, setOpen} = useCartStore()
  const addToCartHandler = () => {
    addCartItem({
      id: product.id,
      name : product.name,
      image: product.images[0].src || product.images,
      price: product.price,
    })
    setOpen(true)
  }
  return (
    <Button
      onClick={addToCartHandler}
      size="default"
      className={cn('text-[14px] bg-black rounded', className)}
    >В кошик</Button>
  )
}