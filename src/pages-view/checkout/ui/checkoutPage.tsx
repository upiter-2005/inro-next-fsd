import { Metadata } from "next"
import { Checkout } from "@/widgets/checkout"
import {CarouselInro} from "@/widgets/carousel"
import { CheckoutCart } from "@/features/cart";

export const metadata: Metadata = {
  title: "Inro - Офоррмлення замовлення",
  description: "Inro - Офоррмлення замовлення",
};

export async function CheckoutPage() {
  return (
    <>
      <div className="flex items-start gap-6 max-w-[1200px] m-auto py-16">
        <Checkout />
        <CheckoutCart className="max-w-[384px]" />
      </div>
      <CarouselInro title="Доповніть замовлення" advanceCard={true} />
    </>
  )
}