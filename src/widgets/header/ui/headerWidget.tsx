import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import { Button } from "@/shared/ui/button"
import Link from "next/link"

import {Search} from "@/features/search"
import {Cart} from "@/features/cart"

import mob_mnu_btn from '@/shared/assets/images/mnu_button.svg'
import logo from '@/shared/assets/images/logo.png'

interface IHeaderProps {
  className?: string
} 

export const Header:React.FC<IHeaderProps> = ({className}) => {
  return (
    <header className={cn(className, "p-6 flex justify-between items-center")}>
      <Button size="icon" className={cn("bg-transparent hover:bg-[#f6edcd]")} ><Image width={24} height={24} src={mob_mnu_btn} alt='Inro'></Image></Button>
      <div className="w-20"><Link href='/'><Image src={logo} alt="Inro" style={{width: '100%'}} quality={100}></Image></Link></div>
      <div className="flex justify-between w-16 gap-4 items-center">
        <Search />
        <Cart />
      </div>
    </header>
  )
}