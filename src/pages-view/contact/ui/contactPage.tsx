import { Metadata } from "next"
import Image from "next/image"
import {CarouselInro} from "@/widgets/carousel"
import { Socials } from "@/shared/ui/socials"

import img from "@/shared/assets/images/salon.jpeg"
import { Mail, MapPin, Smartphone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Inro - Контакти",
  description: "Inro - Контакти",
}

export async function ContactPage () {
  return (
    <>
      <div className="max-w-[1200px] m-auto py-16">
        <div className="flex justify-between w-full mb-8">
          <h1 className="text-4xl">Контакти</h1>
          <Socials />
        </div>

        <div className="flex justify-between w-full">

          <div className="max-w-[384px] rounded-[8px] bg-white overflow-hidden">
            <div className="w-full h-[269px] overflow-hidden">
              <Image src={img} className="object-cover" alt="Inro"/>
            </div>
            <div className="p-9">
              <Link href="#" className="flex items-center gap-3 text-sm"><MapPin width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="flex items-center gap-3 text-sm"><Smartphone width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="flex items-center gap-3 text-sm"><Mail width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="w-full text-sm p-3 border border-[#111] rounded-[4px] block text-center hover:opacity-65 mt-6">Подивитись на мапі</Link>

            </div>
          </div>

          <div className="max-w-[384px] rounded-[8px] bg-white overflow-hidden">
            <div className="w-full h-[269px] overflow-hidden">
              <Image src={img} className="object-cover" alt="Inro"/>
            </div>
            <div className="p-9">
              <Link href="#" className="flex items-center gap-3 text-sm"><MapPin width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="flex items-center gap-3 text-sm"><Smartphone width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="flex items-center gap-3 text-sm"><Mail width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="w-full text-sm p-3 border border-[#111] rounded-[4px] block text-center hover:opacity-65 mt-6">Подивитись на мапі</Link>

            </div>
          </div>

          <div className="max-w-[384px] rounded-[8px] bg-white overflow-hidden">
            <div className="w-full h-[269px] overflow-hidden">
              <Image src={img} className="object-cover" alt="Inro"/>
            </div>
            <div className="p-9">
              <Link href="#" className="flex items-center gap-3 text-sm"><MapPin width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="flex items-center gap-3 text-sm"><Smartphone width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="flex items-center gap-3 text-sm"><Mail width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
              <Link href="#" className="w-full text-sm p-3 border border-[#111] rounded-[4px] block text-center hover:opacity-65 mt-6">Подивитись на мапі</Link>

            </div>
          </div>

        </div>

        <div className="w-full max-w-[690px] mt-40">
          <h2 className="text-4xl mb-6">Stockists</h2>
          <p className="text-xl leading-6">Тут ви знайдете список шоурумів /  кав’ярень / магазинів / книгарень та інших місць, де можна придбати  товари Integralist у вашому місті в Україні. Ми завжди відкриті до нових партнерств, тому якщо ви хочете представляти продукти Integralist у  своєму закладі, напишіть нам щодо співпраці на пошту: hello@integralist.club.</p>

          <div className="bg-white rounded-[8px] overflow-hidden py-10 px-8 mt-6">
            <p className="text-xl leading-5 mb-8">Салон краси Сlips</p>
            <Link href="#" className="flex items-center gap-3 text-[16px] mb-3"><MapPin width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
            <Link href="#" className="flex items-center gap-3 text-[16px] mb-3"><Smartphone width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
            <Link href="#" className="flex items-center gap-3 text-[16px] mb-3"><Mail width={16} /> Київ, Юрія Липи, 6а, офіс 69</Link>
          </div>
        </div>

      </div>

    </>
  )
}