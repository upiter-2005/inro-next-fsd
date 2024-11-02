import { ICartItem } from "@/entities/cartItem/model/types"

export const emailProducts = (cartItems: ICartItem[]) => {

  const productsEmail: any = []
  cartItems.forEach((obj: ICartItem) => {
    let {id, quantity, price} = obj;
    productsEmail.push({name: obj.name ,image : obj.image,quantity, price })
  });

  return productsEmail
}
