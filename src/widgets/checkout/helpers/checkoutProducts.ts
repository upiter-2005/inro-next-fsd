import { ICartItem } from "@/entities/cartItem/model/types"

export const checkoutProducts = (cartItems: ICartItem[]) => {

  const productsArr: any = []
  cartItems.forEach((obj: ICartItem) => {
    let {id, quantity, price} = obj;
         productsArr.push({product_id: id, quantity, price: price })
  });

  return productsArr
}
