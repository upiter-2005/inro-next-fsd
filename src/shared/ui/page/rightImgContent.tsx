import { cn } from "@/shared/helpers"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"


interface IRightImgContent {
  className?: string
  img: StaticImport
  title: string
  children: any
}
const imageStyle = {
  width: '100%',
  height: '100%'
}
export const RightImgContent:React.FC<IRightImgContent> = ({className, img, title, children}) => {
  return(
    <div className={cn("max-w-[1200px] w-full m-auto flex justify-center items-center gap-28 mb-40", className)}>
        <div className="max-w-[498px]">
          <h3 className="text-4xl leading-9 mb-6">{title}</h3>
          <div className="flex flex-col gap-6">{children}</div>
        </div>

        <div className="max-w-[588px] max-h-[588px] w-full overflow-hidden rounded-[8px]">
          <Image src={img} style={imageStyle} alt="Inro"/>
        </div>
    </div>
  )
}