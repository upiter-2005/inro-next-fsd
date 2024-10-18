"use client"
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import Link from "next/link"

import logo from "@/shared/assets/images/footer-logo.svg"

import { Socials } from "@/shared/ui/socials"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import { useWindowDimensions } from "@/shared/hooks/useWindowDemensions"



interface IFooterProps {
  className?: string
}

export const Footer:React.FC<IFooterProps> = ({className}) => {
  const {isMobile} = useWindowDimensions()
  return (
    <footer className={cn(className, "w-full px-4 pt-16 pb-6 md:pt-16 bg-gradient-to-b from-[#111111] to-[#292929]")}>
        <div className="max-w-[1200px] w-full mx-auto md:py-[80px] flex flex-col md:flex-row  gap-2 md:gap-12 justify-between">

            <div className="">
              <Image src={logo} width={140} height={47} alt="Inro" className="mb-5" />
              {!isMobile && <Socials />}
            </div>
            {!isMobile && (
              <>
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
                  <li><Link href="/contact" className="text-sm mb-5 block">Контакти</Link></li>
                </ul>
              </div>

              <div className="text-white">
                <p className="font-semibold mb-5">Покупцям</p>
                <ul className="font-light">
                  <li><Link href="/login" className="text-sm mb-5 block">Вхід в кабінет</Link></li>
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
              </>
            )}


          {isMobile && (
            <>
              <div className="text-white">
                <Accordion  type="single" collapsible >
                  <AccordionItem value="mob_mnu" className="border-none">
                    <AccordionTrigger className="font-semibold mb-0 pt-3">Каталог товарів</AccordionTrigger>
                    <AccordionContent className="text-[#d8d8d8]">
                      <Link href="#" className="text-sm mb-5 block">Новинки</Link>
                      <Link href="#" className="text-sm mb-5 block">Парфуми</Link>
                      <Link href="#" className="text-sm mb-5 block">Для дому</Link>
                      <Link href="#" className="text-sm mb-5 block">Бестселери</Link>
                      <Link href="#" className="text-sm mb-5 block">Подарунки</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="text-white">
                <Accordion  type="single" collapsible >
                  <AccordionItem value="mob_mnu" className="border-none">
                    <AccordionTrigger className="font-semibold mb-0 pt-0">Про бренд</AccordionTrigger>
                    <AccordionContent className="text-[#d8d8d8]">
                      <Link href="/about" className="text-sm mb-5 block">Про бренд</Link>
                      <Link href="#" className="text-sm mb-5 block">Для бізнес</Link>
                      <Link href="#" className="text-sm mb-5 block">Співпраця</Link>
                      <Link href="/contact" className="text-sm mb-5 block">Контакти</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="text-white">
                <Accordion  type="single" collapsible >
                  <AccordionItem value="mob_mnu" className="border-none">
                    <AccordionTrigger className="font-semibold mb-0 pt-0">Покупцям</AccordionTrigger>
                    <AccordionContent className="text-[#d8d8d8]">
                      <Link href="/login" className="text-sm mb-5 block">Вхід в кабінет</Link>
                      <Link href="#" className="text-sm mb-5 block">Оплата та доставка</Link>
                      <Link href="#" className="text-sm mb-5 block">Обмін та повернення</Link>
                      <Link href="#" className="text-sm mb-5 block">Публічна оферта</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="text-white">
                <Link href="#" className="text-sm mb-5 block font-semibold">Підписатись на новини</Link>
                <Link href="#" className="text-sm mb-5 block font-semibold">Замовити дзвінок</Link>
              </div>
            </>

          )}

          {isMobile && <Socials className="pt-16 pb-12"/>}
        </div>
        <div className="max-w-[1200px] w-full mx-auto text-[#A3A3A3] text-sm">© 2024 INRO. All Rights Reserved</div>
    </footer>
  )
}