import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/shared/ui/menubar"
import Link from "next/link"
import React from "react"
import { useState, useRef } from "react"

import { useClickAway } from 'react-use'


export type ItemType = {
  id: number,
  name: string,
  slug: string,
}
export type CategoryMnuType  ={
  id: number,
  name: string,
  slug: string,
  child?: ItemType[]
}

export interface IMenuItem {
  className?: string,
  cat: CategoryMnuType
}

export const MenuItem:React.FC<IMenuItem> = ({className, cat}) => {
  const [open, setOpen] = useState(false);

  return ( 
  
  <li key={`category_${cat.id}`} >
    {/* <DropdownMenu open={openDropdown}  >
      <DropdownMenuTrigger
        ref={ref}
        onMouseEnter={() => setOpenDropdown(true)}
        className="cursor-pointer outline-none"
        >{cat.name}</DropdownMenuTrigger>
        
      <DropdownMenuContent onMouseLeave={() => setOpenDropdown(false)} > 
        {cat.child?.map(chilCat => 
        ( <DropdownMenuItem key={chilCat.id} className="cursor-pointer">
            <Link href={'/'}>{chilCat.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu> */}
    
      <MenubarMenu >
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent  >
          <MenubarItem>New Window</MenubarItem>
          <MenubarItem>Share</MenubarItem>
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
  </li>
  )
}