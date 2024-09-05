'use client'
import { cn } from "@/shared/helpers/cn"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"


import Link from "next/link"
import { useState } from "react"


interface INavigation {
  className?: string
} 

export const Navigation:React.FC<INavigation> = ({className}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <nav className={cn('max-w-[1200px] mx-auto', className)}>
       <DropdownMenu open={openDropdown} onOpenChange={() => setOpenDropdown(false)}>
        <DropdownMenuTrigger
           onMouseEnter={() => setOpenDropdown(true)}
           className="cursor-pointer outline-none"
          >Парфуми</DropdownMenuTrigger>
        <DropdownMenuContent
          onMouseLeave={() => setOpenDropdown(false)} 
        >
          
          <DropdownMenuItem className="cursor-pointer">Тестери ароматів</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Сети</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer"><Link href='/'>Subscription</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}