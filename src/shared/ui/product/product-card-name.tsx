import Link from "next/link"

interface IProductCardName {
  name: string
  productId: string
}

export const ProductCardName:React.FC<IProductCardName> = ({name, productId}) => {
  return (
    <Link href={`/product/${productId}`} className="leading-5 font-light flex-1 md:pr-5 text-sm  h-10 overflow-hidden">{name}</Link>
  )
}