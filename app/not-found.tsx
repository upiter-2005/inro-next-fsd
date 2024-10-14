import { CarouselInro } from '@/widgets/carousel'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className='pt-40 pb-[170px] text-center'>
        <h1 className='text-5xl'>404</h1>
        <p className='pt-4 pb-6'>Цієї сторінки вже не існує, або неправильно введена адреса</p>
        <div className='w-full flex gap-4 justify-center'>
          <Link href="/" className="max-w-[170px] w-full flex justify-center bg-[#111] text-center text-white text-sm p-3 rounded-sm hover:bg-[#111] hover:text-white transition-all hover:opacity-70 leading-4">На головну</Link>
          <Link href="/catalog" className="max-w-[170px] w-full flex justify-center  border border-[#E4E4E4] bg-white text-center text-black text-sm p-3 rounded-sm hover:bg-white hover:text-black transition-all hover:opacity-70 leading-4">До каталогу</Link>
        </div>
      </div>

    <CarouselInro title="Може зацікавити" advanceCard={false} />

   </main>
  )
}