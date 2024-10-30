import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import Link from "next/link"

import {Search} from "@/features/search"
import {Cart} from "@/features/cart"


import logo from '@/shared/assets/images/logo.png'
import { NavMenu } from "./navMenu"

import { HeaderLogin } from "@/features/loginUser"
import { SearchBox } from "@/features/search/ui/serchBox"

interface IHeaderProps {
  className?: string
}

export const Header:React.FC<IHeaderProps> = ({className}) => {

  return (
    <header className={cn(className, "w-full max-w-[1200px] mx-auto py-6 flex justify-between items-center px-3md:")}>
      <div className="w-[110px] md:w-[130px]"><NavMenu /></div>
     
      <div className="w-20"><Link href='/'><Image src={logo} alt="Inro" style={{width: '100%'}} quality={100}></Image></Link></div>
      <div className="flex justify-end md:justify-between gap-1 md:gap-4 items-center w-[110px] md:w-[130px] pr-3">
        <HeaderLogin />
        <Search />
        <Cart />
      </div>
      
    </header>
  )
}