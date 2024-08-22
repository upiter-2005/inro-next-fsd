import {addToCart} from "@/features/cartFeatures/model/actions"
import { Button } from "@/shared/ui/button"

interface IAddToCartProps {
  className?: string
  productId: number
}

export const AddToCart:React.FC<IAddToCartProps> = ({className, productId}) => {

  return (
    <Button onClick={() => addToCart(productId)} size="default" className="text-[14px] bg-black rounded">В кошик</Button>
  )
}