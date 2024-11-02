import { IProduct } from '@/entities/product/model/types'
import { notFound } from 'next/navigation'
import { SingleProduct } from '@/widgets/singleProduct'
import type { Metadata, ResolvingMetadata } from 'next'

// export const dynamic = 'force-static'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const response: IProduct[] =  await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products?slug=${params.id}&consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`, 
    // {cache: 'no-store'}
    { next: { revalidate: 60 } }
  ).then(res => res.json())
  
  return {
    title: `Inro - ${response[0].name}`,
    description: `Inro - ${response[0].name}`,
    openGraph: {
      title: response[0].name,
      description: response[0].name,
      images: [
        {
          url: response[0].images[0].src,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}



export async function productPage({params}: {params: {id: string}}) {
  const response: IProduct[] =  await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products?slug=${params.id}&consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`, 
    // {cache: 'no-store'}
    { next: { revalidate: 60 } }
  ).then(res => res.json())

  if(!response[0]){
    notFound()
  }

  return <SingleProduct product={response[0]} />
}
