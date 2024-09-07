import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/shared/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import Image from "next/image"
import mob_mnu_btn from '@/shared/assets/images/mnu_button.svg'
import { categoriesObj } from "@/shared/constants/categories"
import { NavMenuItem } from "./NavMenuItem"

interface INavMenu {
  className?: string
}

export const NavMenu:React.FC<INavMenu> = ({className}) => {
  console.log(categoriesObj);
    return (

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className={cn("bg-transparent hover:bg-[#f6edcd]")}>
            <Image width={24} height={24} src={mob_mnu_btn} alt='Inro'></Image>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className='w-[281px] overflow-auto px-6 py-16 bg-[#fcf9ee]'>
         {categoriesObj.map((el, i) => <NavMenuItem key={`${el.slug}${i}`} cat={el} /> )}
        </SheetContent>
      </Sheet>
    
     )
}