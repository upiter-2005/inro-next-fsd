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


  return <div className='text-sm'>This page is productPage with id - {id}! Аромодифузори</div>;
}
