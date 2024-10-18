import Image from "next/image"

interface IProductCardThumb {
  image: string,
  alt: string | "Inro"
}

export const ProductCardThumb:React.FC<IProductCardThumb> = ({image, alt}) => {
  return (
    <Image src={image} width={450} height={380} className="h-[165px] md:h-[300px] rounded-[2px] object-cover"  alt={alt} />
  )
}