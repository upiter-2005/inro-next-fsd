import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { ICartItem } from '@/entities/cartItem/model/types'

interface CartState {
  openSearch: boolean
  setOpenSearch: (val: boolean) => void 
}

export const useSearchStore = create<CartState>()(
  persist(
    (set, get) => (
      {
        openSearch: false,
        setOpenSearch: (val) => {
          set({openSearch: val})
        },
      }
    ),
    {
      name: 'inroSearch',
      version: 0.2,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({openSearch: state.openSearch}),

    }
  )

)

