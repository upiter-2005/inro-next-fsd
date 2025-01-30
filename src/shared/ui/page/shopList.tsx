import Link from "next/link"
import { CalendarCheck, Clock, Mail, MapPin, MapPinned, Smartphone } from "lucide-react"
import Image from "next/image"
import room1 from "@/shared/assets/images/room1.jpg"
import room2 from "@/shared/assets/images/shop1.jpg"
import room3 from "@/shared/assets/images/bastion.png"
interface IShopList {
  description?: boolean
}

export const ShopList:React.FC<IShopList> = ({description}) => {
  return (
    <div className="flex flex-wrap justify-between md:justify-start md:gap-4 w-full px-1">

    <div className="md:max-w-[384px] w-full rounded-[8px] bg-white overflow-hidden mb-2">
      <div className="w-full h-[269px] overflow-hidden">
        <Image src={room1} className="object-cover w-full h-full" alt="Inro"/>
      </div>
      <div className="p-9">
        <Link href="#" className="flex items-center gap-3 text-sm"><MapPin width={16} /> Комфорт Таун</Link>
        <Link href="#" className="flex items-center gap-3 text-sm"><MapPinned width={16} /> Київ, ЖК Комфорт Таун, вул. Юрія Липи, 6</Link>
        <Link href="#" className="flex items-center gap-3 text-sm"><Clock width={16} /> Графік роботи: Пн-Нд з 9:00 до 20:00</Link>
        <Link href="https://www.google.com/maps/search/%D0%9A%D0%B8%D1%97%D0%B2,+%D0%96%D0%9A+%D0%9A%D0%BE%D0%BC%D1%84%D0%BE%D1%80%D1%82+%D0%A2%D0%B0%D1%83%D0%BD,+%D0%B2%D1%83%D0%BB.+%D0%AE%D1%80%D1%96%D1%8F+%D0%9B%D0%B8%D0%BF%D0%B8,+6/@50.4331703,30.6186983,18.51z?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" className="w-full text-sm p-3 border border-[#111] rounded-[4px] block text-center hover:opacity-65 mt-6">Подивитись на мапі</Link>

      </div>
    </div>
{/* 
    <div className="md:max-w-[384px] w-full rounded-[8px] bg-white overflow-hidden mb-2">
      <div className="w-full h-[269px] overflow-hidden">
        <Image src={room3} className="object-cover w-full h-full" alt="Inro"/>
      </div>
      <div className="p-9">
        <Link href="#" className="flex items-center gap-3 text-sm"><MapPin width={16} /> Бастіонна</Link>
        <Link href="#" className="flex items-center gap-3 text-sm"><MapPinned width={16} /> Київ, вул. Бастіонна, 5/13</Link>
        <Link href="#" className="flex items-start gap-3 text-sm"><Clock width={16} /> Графік роботи: <br />Пн-Пт з 10:00 до 19:00 <br />Сб-Нд з 11:00 до 18:00  </Link>
        <Link href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D0%B0%D1%81%D1%82%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F,+3,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4190755,30.5490322,18.97z/data=!4m15!1m8!3m7!1s0x40d4cf6c21a8cb9b:0x112c857875e255b7!2z0YPQuy4g0JHQsNGB0YLQuNC-0L3QvdCw0Y8sIDMsINCa0LjQtdCyLCAwMjAwMA!3b1!8m2!3d50.419154!4d30.5496014!16s%2Fg%2F11hz2l9xhw!3m5!1s0x40d4cf6c21a8cb9b:0x112c857875e255b7!8m2!3d50.419154!4d30.5496014!16s%2Fg%2F11hz2l9xhw?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" className="w-full text-sm p-3 border border-[#111] rounded-[4px] block text-center hover:opacity-65 mt-6">Подивитись на мапі</Link>

      </div>
    </div> */}

    <div className="md:max-w-[384px] w-full rounded-[8px] bg-white overflow-hidden mb-2">
      <div className="w-full h-[269px] overflow-hidden">
        <Image src={room2} className="object-cover w-full h-full" alt="Inro"/>
      </div>
      <div className="p-9">
        <Link href="#" className="flex items-center gap-3 text-sm"><MapPin width={16} /> ЦУМ Київ</Link>
        <Link href="#" className="flex items-center gap-3 text-sm"><MapPinned width={16} /> Київ, вул. Хрещатик, 38, 5-й поверх</Link>
        <Link href="#" className="flex items-center gap-3 text-sm"><Clock width={16} /> Графік роботи: Пн-Нд з 10:00 до 22:00</Link>
        <Link href="https://www.google.com/maps/place/Intersport/@50.4451712,30.5176993,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf5ef61402b3:0x7c0766ea3d580dcc!8m2!3d50.4451678!4d30.5202742!16s%2Fg%2F11fl_yd0pn?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" className="w-full text-sm p-3 border border-[#111] rounded-[4px] block text-center hover:opacity-65 mt-6">Подивитись на мапі</Link>

      </div>
    </div>

  </div>
  )
}