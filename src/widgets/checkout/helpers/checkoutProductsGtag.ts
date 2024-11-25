import { ICartItem } from "@/entities/cartItem/model/types"

export const checkoutProductsGtag = (cartItems: ICartItem[]) => {

  const productsArr: any = []
  cartItems.forEach((obj: ICartItem) => {

    let {id, name, quantity, price} = obj;
         productsArr.push({item_id: id,item_name: name, quantity, price })
  });

  return productsArr
}
