'use client'
import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import { useCartStore } from "@/features/cart/model/cartSlice"
import { IProduct } from "@/entities/product/model/types"
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google"

type ProductDataType = Pick<IProduct,'id' | 'name' | 'price' | 'images' >

interface IAddToCartProps {
  className?: string
  product: ProductDataType
}

export const AddToCart: React.FC<IAddToCartProps> = ({ className, product }) => {
  const {addCartItem, setOpen} = useCartStore()

  const fbPixelAddToCart = async()=>{
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.track('AddToCart', {
      value: product.price,
      currency: 'UAH',
      content_ids: [product.id ],
      content_type: 'product'
      }
    )
  }

  const addToCartHandler = () => {
    addCartItem({
      id: product.id,
      name : product.name,
      image: product.images[0].src || product.images,
      price: product.price,
    })
    setOpen(true)
    fbPixelAddToCart()
    if (typeof window !== 'undefined') {
      window.gtag('event', 'add_to_cart', { 
        'send_to': 'ga',
        'currency': "UAH",
        'value': product.price,
        'items': [
          {
            'item_id': product.id,
            'item_name': product.name,
            'price': product.price,
            'quantity': 1
          }
        ]})
  
        window.gtag('event', 'add_to_cart', {
          'send_to': 'ads',
          'value': product.price,
          'items': [
            {
              'id': product.id,
              'google_business_vertical': 'retail'
            }
          ]
        });
  }
   
        



  }
  return (
    <Button
      onClick={addToCartHandler}
      size="default"
      className={cn('text-[14px] bg-black rounded', className)}
    >В кошик</Button>
  )
}