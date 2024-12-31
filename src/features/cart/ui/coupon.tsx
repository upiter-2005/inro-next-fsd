'use client'
import Image from "next/image"
import coupon from "@/shared/assets/images/coupon.svg"
import { cn } from "@/shared/helpers/cn"
import { useState } from "react"
import { useCartStore } from "../model/cartSlice"
interface ICoupon {
    className?: string,
    coupons: any[]
}

export const Coupon:React.FC<ICoupon> = ({coupons, className}) => {
    const {setDiscount, setDiscountType, setCouponCode, discountType} = useCartStore()
    const [error, setError] = useState<boolean>(false)

    const couponHandle = (e: any) => {
        console.log(coupons)
        if(e.target.value.length > 3){
            const result: any = coupons.find(el => el.code.toLowerCase() === e.target.value.toLowerCase())
            
            if(result === undefined){
                setError(true)
                setDiscount("")
                setDiscountType("")
                setCouponCode("")
                return
            }
            else{
                setError(false)
                setDiscount(result.amount)
                setDiscountType(result.discount_type)
                setCouponCode(e.target.value)
                return
            }
            
        }else {
            setDiscount("")
            setDiscountType("")
            setCouponCode("")
            setError(false)
        }
        
    }
  
    return (
        <div className={cn('relative w-full pb-8 pt-4', className)}>
            
            <Image src={coupon} width={24} height={15} alt="Inro coupon" className="absolute right-0 top-6 "/>
            <input 
                type="text" 
                placeholder="Введіть свій промокод" 
                className="bg-transparent text-[#959595] text-sm w-full pb-4 border-b border-b-white outline-none " 
                onChange={couponHandle}
            />
            {error && <div className="text-red-500 text-xs pt-1">Такого коду не існує!</div>}
            
        </div>
    )
}


