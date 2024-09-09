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
  
  return {
    title: `Product title seo - ${params.id}`,
  }
}



export async function productPage({params}: {params: {id: string}}) {
  const response: IProduct[] =  await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products?slug=${params.id}&consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`, 
    // {cache: 'no-store'}
    { next: { revalidate: 60 }}
  ).then(res => res.json())

  if(!response[0]){
    notFound()
  }

  return <SingleProduct product={response[0]} />
}
