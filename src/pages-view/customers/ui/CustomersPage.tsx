import { Metadata } from 'next'

import { findProduct, ISearchParamsTypes } from '@/features/filters/helpers/findProducts'

import { CatalogFilteredWidget } from '@/widgets/catalog-filtered';
import { List } from '@/shared/ui/customers/list';

// export const revalidate = 15

export const metadata: Metadata = {
  title: "Inro - Users",
  description: "Inro - Users",
};

//export const dynamic = 'force-dynamic'
export async function CustomersPage({searchParams}: {searchParams: {page: string}}) {

  const resp = await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/customers?per_page=100&page=${searchParams.page}&consumer_key=ck_7d0a0a541e4fc91baf8b23e22031cf8502c76b24&consumer_secret=cs_84669f4a9e954e566d4817d059786263b9a05ef7`).then(res => res.json()).then(res => res)


  
  

  //const products = await findProduct(searchParams)

  return <>
          <List customers={resp} />
    </>;
}
