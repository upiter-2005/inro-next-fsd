import { cn } from "@/shared/helpers"
import Image from 'next/image'

interface IProductGallery{
  className?: string
  images: any[],
  alt: string
}

export const ProductGallery:React.FC<IProductGallery> = ({className, images, alt}) =>{
  return <div className={cn(className, '')}>
    <Image src={images[0].src} width={399} height={399} style={{width: "100%"}} alt={alt}></Image>
  </div>
}