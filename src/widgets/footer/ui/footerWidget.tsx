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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog"


import { useWindowDimensions } from "@/shared/hooks/useWindowDemensions"
import { CallBackForm } from "@/features/callbackForm"



interface IFooterProps {
  className?: string
}

export const Footer:React.FC<IFooterProps> = ({className}) => {
  const {isMobile} = useWindowDimensions()
  return (

    <>
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
                  <li><Link href="/category/novinki-uk" className="text-sm mb-5 block">Новинки</Link></li>
                  <li><Link href="/category/parfumy" className="text-sm mb-5 block">Парфуми</Link></li>
                  <li><Link href="/category/aromadifuzory" className="text-sm mb-5 block">Для дому</Link></li>
                  <li><Link href="/category/nabory" className="text-sm mb-5 block">Подарунки</Link></li>
                </ul>
              </div>

              <div className="text-white">
                <p className="font-semibold mb-5">Про бренд</p>
                <ul className="font-light">
                  <li><Link href="/about" className="text-sm mb-5 block">Про бренд</Link></li>
                  <li><Link href="/horeca" className="text-sm mb-5 block">Для бізнесу</Link></li>
                  {/* <li><Link href="#" className="text-sm mb-5 block">Співпраця</Link></li> */}
                  <li><Link href="/contact" className="text-sm mb-5 block">Контакти</Link></li>
                </ul>
              </div>

              <div className="text-white">
                <p className="font-semibold mb-5">Покупцям</p>
                <ul className="font-light">
                  <li><Link href="/login" className="text-sm mb-5 block">Вхід в кабінет</Link></li>
                  <li><Link href="/oplata-i-dostavka" className="text-sm mb-5 block">Оплата та доставка</Link></li>
                  <li><Link href="/obmin-ta-povernennya" className="text-sm mb-5 block">Обмін та повернення</Link></li>
                  <li><Link href="/publichna-oferta" className="text-sm mb-5 block">Публічна оферта</Link></li>
                </ul>
              </div>

              <div className="text-white">
                <ul className="font-light">
                <Dialog>
                  <DialogTrigger className="text-sm mb-5 block font-semibold">Замовити дзвінок</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                      <CallBackForm />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <a href="tel:+380992000011" className="text-white font-bold underline text-sm block mb-5">+38 099 200 00 11</a>
                <a href="mailto:info@inro.com.ua" className="text-white font-bold underline text-sm block">info@inro.com.ua</a>
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
                      <Link href="/category/novinki-uk" className="text-sm mb-5 block">Новинки</Link>
                      <Link href="/category/parfumy" className="text-sm mb-5 block">Парфуми</Link>
                      <Link href="/category/aromadifuzory" className="text-sm mb-5 block">Для дому</Link>
                      {/* <Link href="#" className="text-sm mb-5 block">Бестселери</Link> */}
                      <Link href="/category/nabory" className="text-sm mb-5 block">Подарунки</Link>
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
                      <Link href="/horeca" className="text-sm mb-5 block">Для бізнесу</Link>
                      {/* <Link href="#" className="text-sm mb-5 block">Співпраця</Link> */}
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
                      <Link href="/oplata-i-dostavka" className="text-sm mb-5 block">Оплата та доставка</Link>
                      <Link href="/obmin-ta-povernennya" className="text-sm mb-5 block">Обмін та повернення</Link>
                      <Link href="/publichna-oferta" className="text-sm mb-5 block">Публічна оферта</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="text-white">

              <Dialog>
                <DialogTrigger className="text-sm mb-5 block font-semibold">Замовити дзвінок</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                    <CallBackForm />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <a href="tel:+380992000011" className="text-white font-bold underline text-sm block mb-5">+38 099 200 00 11</a>
              <a href="mailto:info@inro.com.ua" className="text-white font-bold underline text-sm block">info@inro.com.ua</a>
              </div>


            </>

          )}

          {isMobile && <Socials className="pt-16 pb-12"/>}
        </div>
        <div className="max-w-[1200px] w-full mx-auto text-[#A3A3A3] text-sm">© 2024 INRO. All Rights Reserved</div>
    </footer>

 

    </>
    
  )
}