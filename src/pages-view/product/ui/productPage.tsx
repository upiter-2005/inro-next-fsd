import { IProduct } from '@/entities/product/model/types'
import { productApi } from '@/shared/api'
import { SingleProduct } from '@/widgets/singleProduct'
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  return {
    title: `Product title seo - ${id}`,
  }
}

export async function productPage<IProductParams>({params: {id}}: {params: {id: string}}) {

  const response = await productApi.getProductBySlug(id)

    if(!response) return 'product not found!'
  console.log(response);
  return <SingleProduct product={response[0]} />;
}
