'use client'
import { cn } from "@/shared/helpers"
import Image from 'next/image'
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss"
interface IProductGallery{
  className?: string
  images: any[],
  alt: string
}

export const ProductGallery:React.FC<IProductGallery> = ({className, images, alt}) =>{
  console.log(images)
  const [imgs, setImgs] = useState([])

    useEffect(()=> {
      const imgObj: any = images.map((obj)=>{
          return {
            original: obj.src,
            thumbnail: obj.src 
          } 
      })
      setImgs(imgObj)
 }, [images])

  return <div className={cn(className, '')}>
    {/* <Image src={images[0].src} width={399} height={399} style={{width: "100%"}} alt={alt}></Image> */}

    <ImageGallery 
    additionalClass="productGallery"
    showBullets={false}
    showNav={false}
    infinite={true}
    disableThumbnailScroll={true}
    disableSwipe={true}
    useBrowserFullscreen={false}
    thumbnailPosition="bottom" 
    showPlayButton={false}
    slideOnThumbnailOver={false}
    items={imgs} />
  </div>
}