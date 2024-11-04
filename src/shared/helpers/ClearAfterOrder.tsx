'use client'
import { useCheckoutStore } from "@/features/formCheckout/model/checkoutSlice"
import Link from "next/link"
import { useEffect } from "react"

export const ClearAfterOrder:React.FC = ({}) => {
  const {setAmount, setOrderIdNumber, setPayment} = useCheckoutStore()

  useEffect(()=>{
    setAmount(0)
    setOrderIdNumber(0)
    setPayment('')
  }, [])

  return (
    <div className='pt-16 md:pt-40 pb-[80px] md:pb-[170px] text-center'>
    <h1 className='text-2xl md:text-5xl'>Ваше замовлення оформлено!</h1>
    <p className='pt-4 md:pb-6 text-sm md:text-xl'>Наші менеджери зв&apos;яжуться з Вам у найближчий час</p>
    <div className='w-full flex gap-4 justify-center'>
      <Link href="/" className="max-w-[170px] w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">На головну</Link>
      <Link href="/catalog" className="max-w-[170px] w-full flex justify-center  border border-[#E4E4E4] bg-white text-center text-black text-sm p-3 rounded-sm hover:bg-white hover:text-black transition-all hover:opacity-70 leading-4">До каталогу</Link>
    </div>
  </div>
  )
}