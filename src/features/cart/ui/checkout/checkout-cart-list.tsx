
import { CheckoutCartItem } from "@/entities/cartItem"
import {useCartStore} from "@/features/cart/model/cartSlice"
import { DeleteFromCart } from "../deleteFromCart"
import { IncreaseCart } from "../increaseCart"
import { DecreaseCart } from "../decreaseCart"

interface ICartList {
  className?: string
}

export const CheckoutCartList:React.FC<ICartList> = ({className}) => {
  const {cartItems} = useCartStore()

  if(!cartItems.length){return (<p className="text-white">Ваш кошик порожній</p>)}

  return (
    <div className={className}>
      {cartItems.map((item, i) => (
          <CheckoutCartItem
            key={i}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
            actionSlot={<DeleteFromCart productId={item.id} invert={true} />}
          />
        ) )}
    </div>

  )
}









