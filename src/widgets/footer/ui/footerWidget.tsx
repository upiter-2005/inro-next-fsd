import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import Link from "next/link"

import logo from "@/shared/assets/images/footer-logo.svg"

import { Socials } from "@/shared/ui/socials"




interface IFooterProps {
  className?: string
}

export const Footer:React.FC<IFooterProps> = ({className}) => {
  return (
    <footer className={cn(className, "w-full pt-16 pb-6  bg-gradient-to-b from-[#111111] to-[#292929]")}>
        <div className="max-w-[1200px] w-full mx-auto py-[80px] flex gap-12 justify-between">

            <div className="">
              <Image src={logo} width={140} height={47} alt="Inro" className="mb-5" />
              <Socials />
            </div>

            <div className="text-white">
              <p className="font-semibold mb-5">Каталог товарів</p>
              <ul className="font-light">
                <li><Link href="#" className="text-sm mb-5 block">Новинки</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Парфуми</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Для дому</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Бестселери</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Подарунки</Link></li>
              </ul>
            </div>

            <div className="text-white">
              <p className="font-semibold mb-5">Про бренд</p>
              <ul className="font-light">
                <li><Link href="#" className="text-sm mb-5 block">Про бренд</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Для бізнес</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Співпраця</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Контакти</Link></li>
              </ul>
            </div>

            <div className="text-white">
              <p className="font-semibold mb-5">Покупцям</p>
              <ul className="font-light">
                <li><Link href="#" className="text-sm mb-5 block">Вхід в кабінет</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Оплата та доставка</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Обмін та повернення</Link></li>
                <li><Link href="#" className="text-sm mb-5 block">Публічна оферта</Link></li>
              </ul>
            </div>

            <div className="text-white">
              <ul className="font-light">
                <li><Link href="#" className="text-sm mb-5 block font-semibold">Підписатись на новини</Link></li>
                <li><Link href="#" className="text-sm mb-5 block font-semibold">Замовити дзвінок</Link></li>
              </ul>
            </div>

        </div>
        <div className="max-w-[1200px] w-full mx-auto text-[#A3A3A3] text-sm">© 2024 INRO. All Rights Reserved</div>
    </footer>
  )
}