import { ICartItem } from "@/entities/cartItem/model/types"

export const checkoutProductsAds = (cartItems: ICartItem[]) => {

  const productsArrAds: any = []
  cartItems.forEach((obj: ICartItem) => {

    let {id} = obj;
    productsArrAds.push({id, 'google_business_vertical': 'retail'
 })
  });

  return productsArrAds
}
