import { CatalogWidget } from '@/widgets/catalog'
import { Metadata } from 'next'

import { findProduct, ISearchParamsTypes } from '@/features/filters/helpers/findProducts';

// export const revalidate = 15

export const metadata: Metadata = {
  title: "Inro - Каталог",
  description: "Inro - Каталог",
};

//export const dynamic = 'force-dynamic'
export async function CatalogPage({searchParams}: {searchParams: ISearchParamsTypes}) {

  const products = await findProduct(searchParams)

  return <>
    <CatalogWidget items={products} type='catalog' catName="Каталог"  />
    </>;
}
