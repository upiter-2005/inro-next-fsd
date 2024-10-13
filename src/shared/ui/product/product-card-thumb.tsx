import Image from "next/image"

interface IProductCardThumb {
  image: string,
  alt: string | "Inro"
}

export const ProductCardThumb:React.FC<IProductCardThumb> = ({image, alt}) => {

  return (

    <Image src={image} width={450} height={380} style={{ width: '100%', height: '380px', borderRadius: '2px', objectFit: 'cover' }} alt={alt} />
  )
}