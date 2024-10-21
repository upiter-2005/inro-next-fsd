import { IProduct } from '@/entities/product/model/types';
import { CatalogWidget } from '@/widgets/catalog';
import { Metadata, ResolvingMetadata } from 'next';
import { getCategoryId } from '../helpers/getCategoryId';
import { getProductsByCats, ISearchParamsCategoryTypes } from '../helpers/getProductByCat';

type Props = {
  params: { slug: string }
  searchParams?: ISearchParamsCategoryTypes
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: `Inro - ${params.slug}`,
  }
}

export const dynamic = 'force-dynamic'
export async function CategoryPage({params, searchParams}: {
  params: {slug: string},
  searchParams: ISearchParamsCategoryTypes
}) {

  const {idCat, idName} = getCategoryId(params.slug)
  const products: IProduct[] =  await getProductsByCats(idCat, searchParams)

  if(!products.length) return (<h2>Category is empty</h2>)

  return <CatalogWidget items={products} type='category' catName={idName}  />;

}
