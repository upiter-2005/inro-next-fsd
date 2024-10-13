/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from "@/shared/helpers"


interface IKeepLine {
  className?: string
}

export const KeepLine:React.FC<IKeepLine> = ({className}) => {



  return(
      <div className="max-w-[1200px] w-full flex justify-between m-auto rounded-[8px] overflow-hidden border border-black my-40">
        <div className="w-1/2 pt-24 pb-20 px-[106px]">
           <p className="text-[34px] font-thin">Залишайся на зв&apos;язку</p>
           <div className="text-sm">Приєднуйтеся до нашої спільноти та отримайте <span className="font-bold">-10%</span>  знижки на першу покупку</div>
        </div>
        <div className="w-1/2 pt-24 pb-20 px-[106px] bg-mramor">werwe</div>
      </div>

  )
}