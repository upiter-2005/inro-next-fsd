import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import cart from "@/shared/assets/images/cart.png"

interface ISearchProps {
  className?: string
}

export const Cart:React.FC<ISearchProps> = ({className}) => {
  return (
    <div className={cn(className, '')}>
      <Image src={cart} alt="inro" width={17} height={17} />
    </div>
  )
}