import { Metadata } from 'next'

import { findProduct, ISearchParamsTypes } from '@/features/filters/helpers/findProducts'

import { CatalogFilteredWidget } from '@/widgets/catalog-filtered';

// export const revalidate = 15

export const metadata: Metadata = {
  title: "Inro - Каталог",
  description: "Inro - Каталог",
};

//export const dynamic = 'force-dynamic'
export async function CatalogPage({searchParams}: {searchParams: ISearchParamsTypes}) {

  const products = await findProduct(searchParams)

  return <>
    <CatalogFilteredWidget items={products} type='catalog' catName="Каталог"   />
    </>;
}
