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

  const coupons: any = await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/coupons?per_page=100&consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`).then(res => res.json())


  return (
    <>
      <BreadcrumbsInro current="Оформлення замовлення"/>
      <div className="flex items-start flex-col md:flex-row gap-6 max-w-[1200px] m-auto py-16">
        <Checkout />
        <CheckoutCart className="w-full md:max-w-[384px] sticky top-0 " coupons={coupons} />
      </div>
      <CarouselInro title="Доповніть замовлення" advanceCard={true} />
    </>
  )
}