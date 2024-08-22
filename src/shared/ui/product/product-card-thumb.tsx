import Image from "next/image"

interface IProductCardThumb {
  image: string
}

export const ProductCardThumb:React.FC<IProductCardThumb> = ({image}) => {
  
  return (
    
    <Image src={image} width={450} height={195} style={{ width: '100%', height: '195px', borderRadius: '2px', objectFit: 'cover' }} alt="Inro" />
  )
}