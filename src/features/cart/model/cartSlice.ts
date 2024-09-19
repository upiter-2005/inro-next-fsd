import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { ICartItem } from '@/entities/cartItem/model/types'

interface CartState {
  cartItems: ICartItem[]
  total: number
  addCartItem: (item: any) => void
  removeItem: (id: number) => void
  increaseFromCart: (id: number) => void
  decreaseFromCart: (id: number) => void
}
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => (
      {
        cartItems: [],
        total: 0,
        addCartItem: (item) => {
          const existItem = get().cartItems.find((el:ICartItem) => el.id === item.id)
          if(existItem){
            existItem.quantity++
            set({cartItems: [...get().cartItems], total: get().total + 1})
            }else{
                set({
                  cartItems: [ ...get().cartItems, {...item, quantity: 1} ],
                  total: get().total + 1  
            })
          }
          
        },
        removeItem: (id) => {
          const existItem = get().cartItems.filter((el:ICartItem) => el.id === id)
          
          if(existItem){
            const updateItems = get().cartItems.filter(el => el.id !== id)
            const updateTotal = updateItems.reduce((acc, current) => acc + current.quantity, 0)
            set({cartItems: updateItems, total: updateTotal})
          }
        },

        increaseFromCart: (id) => {
          const existItem = get().cartItems.find((el:ICartItem) => el.id === id)
          if(existItem) {
            existItem.quantity++
          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + current.quantity, 0)
          set({cartItems: [...get().cartItems], total: updateTotal})
        },

        decreaseFromCart: (id) => {
          const existItem = get().cartItems.find((el:ICartItem) => el.id === id)
          if(existItem) {
            if(existItem.quantity === 1){
              const updatedItems = get().cartItems.filter((el:ICartItem) => el.id !== id)
              const updateTotal = updatedItems.reduce((acc, current) => acc + current.quantity, 0)
              set({cartItems: updatedItems, total: updateTotal})
            }else{
              existItem.quantity--
              const updateTotal = get().cartItems.reduce((acc, current) => acc + current.quantity, 0)
              set({cartItems: [...get().cartItems], total: updateTotal})
            }
          }
        },
      }
    ),
    {
      name: 'inroCart',
      version: 0.2,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({cartItems: state.cartItems, total: state.total}),
     
    }
  )
    
)

mountStoreDevtool('Store1', useCartStore);