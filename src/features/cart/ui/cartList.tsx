'use client'


import { CartItem } from "@/entities/cartItem"
import { DeleteFromCart } from "./deleteFromCart"
import {useCartStore} from "@/features/cart/model/cartSlice"
import { IncreaseCart } from "./increaseCart"
import { DecreaseCart } from "./decreaseCart"

interface ICartList {
  className?: string
}

export const CartList:React.FC<ICartList> = ({className}) => {
  const {cartItems} = useCartStore() 
  const items = cartItems || localStorage.getItem('inroCart')
  return (
    <div className={className}>
    {items.map((item, i) => (
        <CartItem 
          key={i} 
          id={item.id} 
          name={item.name}  
          price={item.price} 
          quantity={item.quantity} 
          image={item.image} 
          actionSlot={<DeleteFromCart productId={item.id}/>}
          increaseSlot={<IncreaseCart productId={item.id}/>}
          decreaseSlot={<DecreaseCart productId={item.id}/>}
        />
      ) )}
    </div>
  
  )
} 









