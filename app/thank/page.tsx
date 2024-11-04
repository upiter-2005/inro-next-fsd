import { Metadata } from "next"


import {ClearAfterOrder} from "@/shared/helpers/ClearAfterOrder"
export const metadata: Metadata = {
  title: "Inro - Дякуємо за замовлення",
  description: "Дякуємо за замовлення",
}

export default function NotFound() {
  return (
    <main className="flex md:min-h-screen flex-col items-center justify-between ">
      <ClearAfterOrder />
   </main>
  )
}