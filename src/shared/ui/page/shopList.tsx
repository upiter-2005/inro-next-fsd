import Link from "next/link"
import { Mail, MapPin, Smartphone } from "lucide-react"
import Image from "next/image"
import img from "@/shared/assets/images/salon.jpeg"

interface IShopList {
  description?: boolean
}

export const ShopList:React.FC<IShopList> = ({description}) => {
  return (
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
  )
}