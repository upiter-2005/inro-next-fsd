'use client'
import {useClickAway, useDebounce} from 'react-use'
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import close from "@/shared/assets/images/close.svg"
import productEx from "@/shared/assets/images/prod.png"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useSearchStore } from "../models/searchSlice"
import useSWR from 'swr'
import { fetcher } from "@/features/filters/helpers/fetcher"

interface ISearchResult {
    className?: string
}

export const SearchResult:React.FC<ISearchResult> = ({className}) => {
    const ref = useRef(null)
    const [value, setValue] = useState<string>('')
    const [debouncedValue, setDebouncedValue] = useState<any[]>([])
    const [searchResult, setSearchResult] = useState<any[]>([])
    const {openSearch, setOpenSearch} = useSearchStore()


    useClickAway(ref, () => {
        setOpenSearch(false)
      })

    const [, cancel] = useDebounce(
        () => {
            if (value.length > 2 ){
                const newArray = searchResult.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
                setDebouncedValue(newArray)
                return
            } 
            return
        },
        1000,
        [value]
    );


    const { data: array1, error: error1, isLoading: isLoading1 } = useSWR<any[] | undefined>(`${process.env.NEXT_PUBLIC_API_HOST}/wp-json/wc/v3/products?per_page=99&page=1&consumer_key=${process.env.NEXT_PUBLIC_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_SECRET}`, fetcher)

    const { data: array2, error: error2, isLoading: isLoading2 } = useSWR<any[] | undefined>(`${process.env.NEXT_PUBLIC_API_HOST}/wp-json/wc/v3/products?per_page=99&page=2&consumer_key=${process.env.NEXT_PUBLIC_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_SECRET}`, fetcher)

    const { data: array3, error: error3, isLoading: isLoading3 } = useSWR<any[] | undefined>(`${process.env.NEXT_PUBLIC_API_HOST}/wp-json/wc/v3/products?per_page=70&page=3&consumer_key=${process.env.NEXT_PUBLIC_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_SECRET}`, fetcher)


    useEffect(()=> {
        if(array1 !== undefined && array2 !== undefined && array3 !== undefined ) setSearchResult([...array1, ...array2, ...array3])
            console.log(searchResult)
    }, [array1, array2, array3])

    console.log(debouncedValue)

    return (
    
        <div className={cn('py-[62px] max-w-[1200px] w-full block m-auto ', className)}>
            <div className="w-full relative">
                {value && <div className='text-[#828282] text-xs mb-2'>Пошук по запиту: <span className='font-bold underline'>{value}</span> (Знайдено {debouncedValue.length} товарів)</div>}
                
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Введіть пошуковий запит' className="w-full pb-3 bg-transparent focus-within:outline-none autofill:bg-transparent border-b border-b-[#111] mb-8" />
                <button 
                    onClick={()=>{setOpenSearch(false)}}
                    className="absolute top-0 right-0"
                >
                    <Image src={close} width={14} height={14} alt="" />
                </button>
            </div>

            <div className="flex gap-6 justify-start items-center flex-wrap overflow-y-auto max-h-[500px] md:max-h-[200px]">
                {debouncedValue?.map((product, value) => (
                    <div className="flex items-center max-w-[234px] hover:opacity-65" key={product.id}>
                        <div className="block w-[72px] h-[72px] overflow-hidden relative mr-5">
                        <Image   
                            className="bg-black w-auto h-[72px] object-cover relative" 
                            src={product.images[0].src} 
                            fill={true} 
                            alt="" 
                        />
                        </div>
                        <Link href={`/product/${product.slug}`} className="text-[#111] text-sm flex-1" onClick={()=>{setOpenSearch(false)}}>{product.name}</Link>
                    </div>
                ))}
                

            </div>
        </div>
        
    )
}