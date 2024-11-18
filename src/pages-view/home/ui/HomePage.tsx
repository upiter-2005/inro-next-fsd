import { CarouselInro } from '@/widgets/carousel';
import { CarouselBanerInro } from '@/widgets/carouselBaner';
import { SaleBaner } from '@/widgets/carouselSaleBaner';
import { KeepLine } from '@/widgets/keepLine';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Inro - преміальна нішева косметика, аромати, догляд за собою",
  description: "INRO – маленька деталь, яка може розповісти багато про що",
  openGraph: {
    title: 'Inro - преміальна нішева косметика, аромати, догляд за собою',
    description: 'INRO – маленька деталь, яка може розповісти багато про що',
    images: [
      {
        url: 'https://www.api.inro.com.ua/wp-content/uploads/2021/02/Nabir-CROFTON-22.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
}

export async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <CarouselBanerInro />
      <CarouselInro title="Популярні товари" advanceCard={false} />
      <SaleBaner />
      <KeepLine />
    </main>
  );
}
