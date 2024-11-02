import { Metadata } from "next"
import Image from "next/image"
import {CarouselInro} from "@/widgets/carousel"
import { Socials } from "@/shared/ui/socials"

import img from "@/shared/assets/images/salon.jpeg"
import { Mail, MapPin, Smartphone } from "lucide-react"
import Link from "next/link"
import { ShopList } from "@/shared/ui/page/shopList"
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro"

export const metadata: Metadata = {
  title: "Inro - Контакти",
  description: "Inro - Контакти",
  openGraph: {
    title: 'Inro - Контакти',
    description: 'INRO – Контакти',
    images: [
      {
        url: 'https://www.api.inro.com.ua/wp-content/uploads/2021/02/Nabir-CROFTON-22.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
}

export async function ContactPage () {
  return (
    <>
      <BreadcrumbsInro
        current="Контакти"
      />
      <div className="max-w-[1200px] m-auto py-16 px-4">
        <div className="flex justify-between w-full mb-8">
          <h1 className="text-4xl">Контакти</h1>
          <Socials />
        </div>

        <ShopList  />

        {/* <div className="w-full max-w-[690px] mt-40">
          <h2 className="text-4xl mb-6">Контакти магазинів:</h2>
          <p className="text-xl leading-6">Тут ви знайдете список шоурумів /  кав’ярень / магазинів / книгарень та інших місць, де можна придбати  товари Integralist у вашому місті в Україні. Ми завжди відкриті до нових партнерств, тому якщо ви хочете представляти продукти Integralist у  своєму закладі, напишіть нам щодо співпраці на пошту: hello@integralist.club.</p>

          <div className="bg-white rounded-[8px] overflow-hidden py-10 px-8 mt-6">
            <p className="text-xl leading-5 mb-8">Салон краси Сlips</p>
            <Link href="#" className="flex items-center gap-3 text-[16px] mb-3"><MapPin width={16} /> Київ, ЖК Комфорт Таун, вул. Юрія Липи, 6</Link>
            <Link href="#" className="flex items-center gap-3 text-[16px] mb-3"><Smartphone width={16} /> Київ, вул. Бастіонна, 3/5</Link>
            <Link href="#" className="flex items-center gap-3 text-[16px] mb-3"><Mail width={16} /> Київ, вул. Хрещатик, 38, 5-й поверх</Link>
          </div>
        </div> */}

      </div>

    </>
  )
}