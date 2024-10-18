import { cn } from "@/shared/helpers"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"


interface ILeftImgContent {
  className?: string
  img: StaticImport
  title: string
  children: any
}
const imageStyle = {
  width: '100%',
  height: '100%'
}
export const LeftImgContent:React.FC<ILeftImgContent> = ({className, img, title, children}) => {
  return(
    <div className={cn("max-w-[1200px] w-full m-auto flex flex-col md:flex-row justify-center items-center gap-7 md:gap-28 mb-20 md:mb-40", className)}>

        <div className="max-w-[588px] max-h-[588px] w-full overflow-hidden rounded-[8px] order-2 md:order-1">
          <Image src={img} style={imageStyle} alt="Inro"/>
        </div>
        <div className="max-w-[498px] order-1 md:order-2">
          <h3 className="text-3xl md:text-4xl leading-7 md:leading-9 mb-6">{title}</h3>
          <div className="flex flex-col gap-6">{children}</div>
        </div>

    </div>
  )
}