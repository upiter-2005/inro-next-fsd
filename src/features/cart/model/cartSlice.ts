import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { ICartItem } from '@/entities/cartItem/model/types'

interface CartState {
  cartItems: ICartItem[]
  total: number,
  openCart: boolean
  setOpen: (val: boolean) => void 
  addCartItem: (item: any) => void
  removeItem: (id: number) => void
  increaseFromCart: (id: number) => void
  decreaseFromCart: (id: number) => void
  clearCart: () => void
  setDiscount: (val:string) => void
  setDiscountType: (val:string) => void
  setCouponCode: (val: string)=> void
  discountAmount: number
  discountType: string
  couponCode: string
 
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => (
      {
        cartItems: [] ,
        total: 0,
        couponCode: '',
        discountAmount: 0,
        
        discountType: '',
        openCart: false,
        setOpen: (val) => {set({openCart: val})},
       
        addCartItem: (item) => {
          const existItem = get().cartItems.find((el:ICartItem) => el.id === item.id)
          if(existItem){
            existItem.quantity++
            set({
              cartItems: [...get().cartItems],
              total: get().total + parseInt(item.price)
            })
            }else{
                set({
                  cartItems: [ ...get().cartItems, {...item, quantity: 1} ],
                  total: get().total + parseInt(item.price)
            })
          }

        },
        removeItem: (id) => {
          const existItem = get().cartItems.filter((el:ICartItem) => el.id === id)
          if(existItem){
            const updateItems = get().cartItems.filter(el => el.id !== id)
            const updateTotal = updateItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
            set({cartItems: updateItems, total: updateTotal})
          }
        },

        increaseFromCart: (id) => {
          const existItem = get().cartItems.find((el:ICartItem) => el.id === id)
          if(existItem) {
            existItem.quantity++
          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
          set({cartItems: [...get().cartItems], total: updateTotal})
        },

        decreaseFromCart: (id) => {
          const existItem = get().cartItems.find((el:ICartItem) => el.id === id)
          if(existItem) {
            if(existItem.quantity === 1){
              const updatedItems = get().cartItems.filter((el:ICartItem) => el.id !== id)
              const updateTotal = updatedItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
              set({
                cartItems: updatedItems,
                total: updateTotal
              })
            }else{
              existItem.quantity--
              const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
              set({cartItems: [...get().cartItems], total: updateTotal})
            }
          }
        },
        clearCart: () => {
          set({cartItems: [], total: 0})
        },
        setDiscount: (discountAmount) => {
          set({discountAmount: Number(discountAmount)})
        },
        setDiscountType: (discountType) => {
          set({discountType})
        },
        setCouponCode: (code) => {
          set({couponCode: code})
        },
      }
    ),
    {
      name: 'inroCart',
      version: 0.5,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({cartItems: state.cartItems, total: state.total, discountType: state.discountType, couponCode: state.couponCode}),

    }
  )

)

