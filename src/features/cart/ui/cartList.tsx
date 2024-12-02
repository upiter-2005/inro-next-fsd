
import { CartItem } from "@/entities/cartItem"
import { DeleteFromCart } from "./deleteFromCart"
import {useCartStore} from "@/features/cart/model/cartSlice"
import { IncreaseCart } from "./increaseCart"
import { DecreaseCart } from "./decreaseCart"
import { useEffect } from "react"
import { checkoutProductsGtag } from "@/widgets/checkout/helpers/checkoutProductsGtag"

interface ICartList {
  className?: string
}

export const CartList:React.FC<ICartList> = ({className}) => {
  const {cartItems, total} = useCartStore()

  useEffect(()=>{
    const items = checkoutProductsGtag(cartItems)
    window.gtag("event", "view_cart", {
      currency: "UAH",
      value: total,
      items
    });
    
  }, [window.gtag, cartItems])
  
  if(!cartItems.length){return (<p>Ваш кошик порожній</p>)}

  return (
    <div className={className}>
      {cartItems.map((item, i) => (
          <CartItem
            key={i}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity} 
            image={item.image}
            actionSlot={<DeleteFromCart productId={item.id} name={item.name} price={item.price}/>}
            increaseSlot={<IncreaseCart productId={item.id}/>}
            decreaseSlot={<DecreaseCart productId={item.id}/>}
          />
        ) )}
    </div>

  )
}









