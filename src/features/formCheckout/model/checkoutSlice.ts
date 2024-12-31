import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface ICheckoutData {
  payment: string
  setPayment: (value: string) => void
  setOrderIdNumber: (value: number) => void
  setAmount: (value: number) => void
  orderIdNumber: number
  lqAmount: number
  offerSubmit: boolean
  setOfferSubmit: (val: boolean) => void
}

export const useCheckoutStore = create<ICheckoutData>()(
  persist(
    (set, get) => (
      {
        lqAmount: 0,
        payment: '',
        orderIdNumber: 0,
        offerSubmit: false,
        setPayment: (value) => {
          set({payment: value})
        },
        setOrderIdNumber: (value) => {
          set({orderIdNumber: value})
        },
        setAmount: (value) => {
          set({lqAmount: value})
        },
        setOfferSubmit: (val) => {set({offerSubmit: val})},
      }
    ),
    {
      name: 'inroCheckout',
      version: 0.2,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({payment: state.payment, orderIdNumber: state.orderIdNumber, lqAmount: state.lqAmount}),

    }
  )

)

