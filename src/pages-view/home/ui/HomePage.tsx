import { CarouselInro } from '@/widgets/carousel';
import { CarouselBanerInro } from '@/widgets/carouselBaner';
import { SaleBaner } from '@/widgets/carouselSaleBaner';
import { KeepLine } from '@/widgets/keepLine';


export async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
     <CarouselBanerInro />
     <CarouselInro title="Акційні пропозиції" advanceCard={false} />
     <SaleBaner />
     <KeepLine />
    </main>
  );
}
