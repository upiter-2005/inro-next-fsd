import { addToCart } from "@/features/cart/model/actions"
import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"

interface IAddToCartProps {
  className?: string
  productId: number
}

export const AddToCart: React.FC<IAddToCartProps> = ({ className, productId }) => {

  return (
    <Button onClick={() => addToCart(productId)} size="default" className={cn('text-[14px] bg-black rounded', className)}>В кошик</Button>
  )
} 