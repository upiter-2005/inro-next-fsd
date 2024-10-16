import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export interface User {
  id?: number,
  name?: string,
  email?: string,
  acf: {
    first_name?: string,
    last_name?: string,
    tel?: string,
    born_date?: string,
    adress?: string,
    street?: string
  }
}

export  interface UserState {
  user: User
  setUser: (user: User)=> void
  clearUser: ()=> void
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => (
      {
        user:  {
          id: 0,
          name: '',
          email: '',
          acf: {
            first_name: '',
            last_name: '',
            tel: '',
            born_date: '',
            adress: '',
            street: ''
          }
        },
        // addCartItem: (item) => {
        //   const existItem = get().cartItems.find((el:ICartItem) => el.id === item.id)
        //   if(existItem){
        //     existItem.quantity++
        //     set({
        //       cartItems: [...get().cartItems],
        //       total: get().total + parseInt(item.price)
        //     })
        //     }else{
        //         set({
        //           cartItems: [ ...get().cartItems, {...item, quantity: 1} ],
        //           total: get().total + parseInt(item.price)
        //     })
        //   }

        // },

        setUser: (user) => {
          set({user: user})
        },
        clearUser: ()=>{
          set({user: {
            id: 0,
            name: '',
            email: '',
            acf: {
              first_name: '',
              last_name: '',
              tel: '',
              born_date: '',
              adress: '',
              street: ''
            }
          }})
        }




        // decreaseFromCart: (id) => {
        //   const existItem = get().cartItems.find((el:ICartItem) => el.id === id)
        //   if(existItem) {
        //     if(existItem.quantity === 1){
        //       const updatedItems = get().cartItems.filter((el:ICartItem) => el.id !== id)
        //       const updateTotal = updatedItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
        //       set({
        //         cartItems: updatedItems,
        //         total: updateTotal
        //       })
        //     }else{
        //       existItem.quantity--
        //       const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
        //       set({cartItems: [...get().cartItems], total: updateTotal})
        //     }
        //   }
        // },
        // clearCart: () => {
        //   set({cartItems: [], total: 0})
        // }
      }
    ),
    {
      name: 'inroUser',
      version: 0.2,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({user: state.user}),

    }
  )

)

