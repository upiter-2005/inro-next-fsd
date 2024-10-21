"use client"
import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/shared/ui/sheet"

import Image from "next/image"
import mob_mnu_btn from '@/shared/assets/images/mnu_button.svg'
import { categoriesObj } from "@/shared/constants/categories"
import { NavMenuItem } from "./NavMenuItem"
import Link from "next/link"
import { useState } from "react"
import { Socials } from "@/shared/ui/socials"
import { SocialsMini } from "@/shared/ui/socialsMini"

interface INavMenu {
  className?: string
}

export const NavMenu:React.FC<INavMenu> = ({className}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
    return (

      <Sheet open={isOpen} onOpenChange={()=>setIsOpen(!isOpen)}>
        <SheetTrigger asChild>
          <Button size="icon" className={cn("bg-transparent hover:bg-[#f6edcd]")}>
            <Image width={24} height={24} src={mob_mnu_btn} alt='Inro'></Image>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className='w-[281px] overflow-auto px-6 py-16 bg-[#fcf9ee]'>
         {categoriesObj.map((el, i) => <NavMenuItem key={`${el.slug}${i}`} cat={el} closeMnu={()=>setIsOpen(false)} /> )}
         <div className="py-3 font-medium"><Link  href={`/about`} className="" onClick={()=>setIsOpen(false)}>Про бренд</Link></div>
         <div className="py-3 font-medium"><Link  href={`/horeca`} className="" onClick={()=>setIsOpen(false)}>Horeca</Link></div>
         <div className="py-3 font-medium"><Link  href={`/login`} className="" onClick={()=>setIsOpen(false)}>Вхід в кабінет</Link></div>
         <div className="py-3 font-medium"><Link  href={`/contact`} className="" onClick={()=>setIsOpen(false)}>Контакти</Link></div>

        <SocialsMini className="mt-10" />
        </SheetContent>

      </Sheet>

     )
}