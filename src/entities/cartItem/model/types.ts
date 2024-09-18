export interface ICartItem {
  id: number
  name : string 
  image?: string
  price: number
  quantity: number
  className?: string
  actionSlot?: React.ReactNode
}