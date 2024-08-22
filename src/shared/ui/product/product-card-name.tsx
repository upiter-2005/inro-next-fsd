import Link from "next/link"

interface IProductCardName {
  name: string
  productId: number
}

export const ProductCardName:React.FC<IProductCardName> = ({name, productId}) => {
  return (
    <Link href={`/product/${productId}`} className="leading-5 font-light">{name}</Link>
  )
}