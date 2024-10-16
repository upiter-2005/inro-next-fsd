/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/form/input"
import Link from "next/link"


interface IKeepLine {
  className?: string
}

export const KeepLine: React.FC<IKeepLine> = ({ className }) => {



  return (
    <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-between m-auto rounded-[8px] overflow-hidden border border-black md:my-40">

      <div className="py-[60px] md:w-1/2 md:pt-24 px-6 md:px-[106px]">
        <p className="text-[34px] font-thin text-center">Залишайся на зв&apos;язку</p>
        <div className="text-sm py-4 text-center font-thin leading-[20px]">Приєднуйтеся до нашої спільноти та отримайте <span className="font-bold">-10%</span>  знижки на першу покупку</div>
        <form action="">
        <input type="email" placeholder="Електронна пошта" className={cn('text-sm w-full p-0 pb-3 mb-8 border border-solid border-transparent border-b-[#111]  bg-transparent placeholder:text-[#959595]', className)} />
          <Button type="submit" className="max-w-[213px] w-full flex justify-center m-auto bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">Підписатись</Button>
        </form>
      </div>

      <div className="py-[60px] md:w-1/2 md:pt-24 md:pb-20 px-6 md:px-[106px] bg-mramor text-white text-center">
        <p className="text-[34px] font-thin text-center">Потрібна допомога</p>
          <div className="text-sm py-4 text-center font-thin leading-[20px]">Ми завжди поруч, щоб забезпечити вам найкращий сервіс і вирішити всі ваші потреби.</div>
          <Link href="tel:+38 099 200 00 11" className="text-sm py-4 text-center font-thin leading-[20px]">+38 099 200 00 11</Link>

            <Button type="submit" className="max-w-[213px] w-full flex justify-center m-auto bg-transparent text-center border border-white text-[#fff] text-sm p-3 rounded-sm hover:bg-white hover:text-black transition-all hover:opacity-70 leading-4 mt-10">Зворотній зв’язок</Button>

      </div>

    </div>

  )
}