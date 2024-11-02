import { useEffect, useState } from "react"
import { useCartStore } from "../model/cartSlice"
import { minusPercent } from "@/shared/helpers/minus-percent"
import { useCheckoutStore } from "@/features/formCheckout/model/checkoutSlice"

export const useLiqpayDiscount =() => {

    const {  discountAmount, discountType } = useCartStore()
    const {lqAmount} = useCheckoutStore()
    const [lqSummaryTotal, setLqSummaryTotal] = useState<number>(lqAmount)
    
    useEffect(()=>{
        if(discountType === 'percent'){
            setLqSummaryTotal(minusPercent(lqAmount, discountAmount))
        }
        else if(discountType === 'fixed_cart'){
            setLqSummaryTotal(lqAmount - discountAmount)
        }else{
            setLqSummaryTotal(lqAmount)
        }
      }, [discountAmount, discountType, lqAmount])

    return {lqSummaryTotal}

}