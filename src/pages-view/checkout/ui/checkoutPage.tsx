import { Metadata } from "next"
import { Checkout } from "@/widgets/checkout"
import {CarouselInro} from "@/widgets/carousel"
import { CheckoutCart } from "@/features/cart";
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro";

export const metadata: Metadata = {
  title: "Inro - Офоррмлення замовлення",
  description: "Inro - Офоррмлення замовлення",
};

export async function CheckoutPage() {
  return (
    <>
    <BreadcrumbsInro
        current="Оформлення замовлення"
      />
      <div className="flex items-start flex-col md:flex-row gap-6 max-w-[1200px] m-auto py-16">
        <Checkout />
        <CheckoutCart className="w-full md:max-w-[384px] sticky top-0 " />
      </div>
      <CarouselInro title="Доповніть замовлення" advanceCard={true} />
    </>
  )
}