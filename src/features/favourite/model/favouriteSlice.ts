import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ICartItem } from '@/entities/cartItem/model/types'

type FavouriteType = Pick<ICartItem,'id' | 'name' | 'price' | 'image' >

interface FavouriteState {
  favouritesItems: FavouriteType[],
  handleFavouriteItem: (item: FavouriteType)=>void
}

export const useFavouriteStore = create<FavouriteState>()(
  persist(
    (set, get) => (
      {
        favouritesItems: [] ,
        handleFavouriteItem: (item:FavouriteType) => {
          const existItem = get().favouritesItems.find((el:FavouriteType) => el.id === item.id)
          if(existItem){
            const favouritesItemsFiltered = get().favouritesItems.filter((obj) => item.id !== obj.id)
            set({
              favouritesItems: favouritesItemsFiltered
            })
            }else{
                set({
                 favouritesItems: [ ...get().favouritesItems, {...item} ]
            })
          }
        },
      }
    ),
    {
      name: 'inroFavourite',
      version: 0.2,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({favouritesItems: state.favouritesItems, }),

    }
  )

)

