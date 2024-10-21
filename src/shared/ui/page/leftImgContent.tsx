import { cn } from "@/shared/helpers"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { object } from "zod"


interface ILeftImgContent {
  className?: string
  img: StaticImport
  title?: string
  children: any
}

export const LeftImgContent:React.FC<ILeftImgContent> = ({className, img, title, children}) => {
  return(
    <div className={cn("max-w-[1200px] w-full m-auto flex flex-col md:flex-row justify-center items-center gap-7 md:gap-28 mb-20 md:mb-40", className)}>

        <div className="relative md:w-[588px] md:h-[588px] w-full h-[335px] overflow-hidden rounded-[8px] order-2 md:order-1">
          <Image src={img} fill style={{objectFit: 'cover'}} alt="Inro"/>
        </div>
        <div className="max-w-[498px] order-1 md:order-2">
          {title && (<h3 className="text-3xl md:text-4xl leading-7 md:leading-9 mb-6">{title}</h3>)}

          <div className="flex flex-col gap-6">{children}</div>
        </div>

    </div>
  )
}