export interface ISearchParamsCategoryTypes {
  orderby?: string 
  order?: string
  per_page?: string
  offset?: string
}

export const getProductsByCats = async(categoryId: number, searchParams:ISearchParamsCategoryTypes) => {

  let query = '?'
  query += `category=${categoryId}`
  if(searchParams.orderby) query += `&orderby=${searchParams.orderby}`
  if(searchParams.order) query += `&order=${searchParams.order}`
  if(searchParams.per_page) query += `&per_page=${searchParams.per_page}`
  if(searchParams.offset) query += `&offset=${searchParams.offset}`
  query += '&'

      const response = await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products/${query}consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`, 
        //{cache: 'no-store'},
        { next: { revalidate: 5 }}
      ).then(res => res.json())

  return response
}