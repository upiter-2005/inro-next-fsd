export {generateMetadata} from '@/pages-view/product'

export async function generateStaticParams() {
  const products = await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products?per_page=100&consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`).then(res => res.json())
  const staticPaths = products.map((product:any) => ({
    id: product.slug
  }))

  return staticPaths
}
export const dynamic = 'force-dynamic'
export {productPage as default} from '@/pages-view/product'