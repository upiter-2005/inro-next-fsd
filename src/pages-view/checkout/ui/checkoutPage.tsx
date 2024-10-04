import { Checkout } from '@/widgets/checkout';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Inro - Офоррмлення замовлення",
  description: "Inro - Офоррмлення замовлення",
};

export async function CheckoutPage() {
  return <div className="max-w-[1200px] m-auto py-16">
      <Checkout />
    </div>;
}
