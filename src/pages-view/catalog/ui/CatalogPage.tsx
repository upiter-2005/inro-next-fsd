import { CatalogWidget } from '@/widgets/catalog'
import { Metadata } from 'next'

import { findProduct, ISearchParamsTypes } from '@/features/filters/helpers/findProducts';

export const metadata: Metadata = {
  title: "Inro - Каталог",
  description: "Inro - Каталог",
};

export async function CatalogPage({searchParams}: {searchParams: ISearchParamsTypes}) {

  const products = await findProduct(searchParams)
 
  
  if(!products) return("Products not found!")

  return <>
    <CatalogWidget items={products}  />
    </>;
}
