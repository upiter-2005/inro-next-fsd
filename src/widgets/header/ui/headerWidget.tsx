import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import Link from "next/link"

import {Search} from "@/features/search"
import {Cart} from "@/features/cart"


import logo from '@/shared/assets/images/logo.png'
import { NavMenu } from "./navMenu"

import { HeaderLogin } from "@/features/loginUser"

interface IHeaderProps {
  className?: string
}

export const Header:React.FC<IHeaderProps> = ({className}) => {

  return (
    <header className={cn(className, "w-full max-w-[1200px] mx-auto py-6 flex justify-between items-center px-3md:")}>
     <NavMenu />
      <div className="w-20"><Link href='/'><Image src={logo} alt="Inro" style={{width: '100%'}} quality={100}></Image></Link></div>
      <div className="flex justify-between gap-4 items-center">
        <HeaderLogin />
        <Search />
        <Cart />
      </div>
    </header>
  )
}