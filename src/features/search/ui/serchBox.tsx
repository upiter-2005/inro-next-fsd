'use client'
import {useClickAway} from 'react-use'
import { cn } from "@/shared/helpers/cn"

import { useRef } from "react"
import { useSearchStore } from "../models/searchSlice"
import { SearchResult } from './serchResult'
interface ISearchBox {
    className?: string
}

export const SearchBox:React.FC<ISearchBox> = ({className}) => {
    const ref = useRef(null)
    const {openSearch, setOpenSearch} = useSearchStore()

    useClickAway(ref, () => {
        setOpenSearch(false)
      })

    return (
        <div className="w-full relative " ref={ref}>
            <div className={cn( 
                "w-full absolute -top-[88px] md:top-0  z-10 bg-[#FCF9EE] overflow-hidden  transition-all duration-500 ease  px-4", 
                `${openSearch ? 'max-h-[100vh] md:max-h-[365px] border-b border-b-[#D3D3D3]' : 'max-h-0'}`
                 )}>
                
                 {openSearch && <SearchResult/>}
            </div>
            
        </div>
        
    )
}