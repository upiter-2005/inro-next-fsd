export interface ICartItem {
  className?: string
  id: number
  name : string 
  image: string
  price: number
  quantity: number
  actionSlot: React.ReactNode
  increaseSlot?: React.ReactNode
  decreaseSlot?: React.ReactNode
}