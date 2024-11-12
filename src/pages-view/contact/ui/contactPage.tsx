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

        <div className="w-full max-w-[690px] mt-40">
          <h2 className="text-4xl mb-6">STOCKLIST</h2>
          <p className="text-xl leading-6">Асортимент INRO також можете знайти тут: </p>

          <div className="bg-white rounded-[8px] overflow-hidden py-10 px-8 mt-6">
            <p className="text-xl leading-5 mb-8">КИЇВ </p>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> магазин &quot;Етніка&quot; ТРЦ Respublika Park, <br />Кільцева дорога, 1</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> магазин &quot;Етніка&quot; <br /> ТРЦ Gulliver, Спортивна площа, 1а, 2-ий поверх</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> Tsarsky Beauty&SPA, <br />вул. Старонаводницька, 13 б</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> SPA at Hilton, <br />б. Тараса Шевченка, 30</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> мережа салонів краси Kukla <br />прос. Петра Григоренка, 22/20</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> салон краси FETCHY <br />Дніпровська набережна, 16Д</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> магазин одягу MORANDI <br />вул. Воздвиженська, 31а</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> салон краси Clipse <br />вул. Цитадельна, 8/41</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> Клінічна Академія Лазерної <br />Медицини CALM</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> фітнес - студія Faktura <br />вул. Щекавицька, 30/39 </Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> магазин одягу ROAR <br />вул. Євгена Коновальця, 17</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> салон краси Цирюльня Едо <br />вул. Василя Тютюнника, 22</Link>
          </div>

          <div className="bg-white rounded-[8px] overflow-hidden py-10 px-8 mt-6">
            <p className="text-xl leading-5 mb-8">ОДЕСА </p>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> шоурум YIYI <br />вул. Грецька, 26/28</Link>
          </div>

          <div className="bg-white rounded-[8px] overflow-hidden py-10 px-8 mt-6">
            <p className="text-xl leading-5 mb-8">ЛЬВІВ </p>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> Edem Resort Medical & SPA <br />хутір Ріпище 1, Стрілки, Львівська область</Link>
            <Link href="#" className="flex items-start gap-3 text-[16px] mb-3"><MapPin width={16} /> квітковий бутік The Flowers <br />вул. Костя Левицького, 56</Link>
          </div>

        </div>

      </div>

    </>
  )
}