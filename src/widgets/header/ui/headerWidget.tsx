import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import { Button } from "@/shared/ui/button"
import Link from "next/link"

import {Search} from "@/features/search"
import {Cart} from "@/features/cart"

import mob_mnu_btn from '@/shared/assets/images/mnu_button.svg'
import logo from '@/shared/assets/images/logo.png'
import { NavMenu } from "./navMenu"

interface IHeaderProps {
  className?: string
} 

export const Header:React.FC<IHeaderProps> = ({className}) => {
  return (
    <header className={cn(className, "w-full max-w-[1200px] mx-auto p-6 flex justify-between items-center")}>
     <NavMenu />
      <div className="w-20"><Link href='/'><Image src={logo} alt="Inro" style={{width: '100%'}} quality={100}></Image></Link></div>
      <div className="flex justify-between w-16 gap-4 items-center">
        <Search />
        <Cart />
      </div>
    </header>
  )
}