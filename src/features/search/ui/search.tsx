'use client'
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import icon from "@/shared/assets/images/search.svg"
import { useSearchStore } from "../models/searchSlice"

interface ISearchProps {
  className?: string
}

export const Search:React.FC<ISearchProps> = ({className}) => {
  const {openSearch, setOpenSearch} = useSearchStore()
  return (
    <div className={cn(className, 'cursor-pointer')} onClick={() => setOpenSearch(true)}>
     
      <Image src={icon} alt="inro" width={17} height={17} />
    </div>
  )
}