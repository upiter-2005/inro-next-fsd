import { useEffect, useState } from "react"
import { useCartStore } from "../model/cartSlice"
import { minusPercent } from "@/shared/helpers/minus-percent"

export const useCountDiscountPrice =() => {

    const { total, discountAmount, discountType } = useCartStore()
    const [summaryTotal, setSummaryTotal] = useState<number>(total)
    
    useEffect(()=>{
        if(discountType === 'percent'){
          setSummaryTotal(minusPercent(total, discountAmount))
        }
        else if(discountType === 'fixed_cart'){
          setSummaryTotal(total - discountAmount)
        }else{
          setSummaryTotal(total)
        }
      }, [discountAmount, discountType, total])

    return {summaryTotal}

}