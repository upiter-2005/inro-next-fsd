export interface ISearchParamsCategoryTypes {
  orderby?: string
  order?: string
  per_page?: number
  page?: number
}

export const getProductsByCats = async(categoryId: number, searchParams:ISearchParamsCategoryTypes) => {

  const per_page = searchParams.per_page || 4
  let query = '?'
  query += `category=${categoryId}`
  query += `&per_page=${per_page}`
  if(searchParams.orderby) query += `&orderby=${searchParams.orderby}`
  if(searchParams.order) query += `&order=${searchParams.order}`

  if(searchParams.page) query += `&offset=${(searchParams.page - 1) * per_page}`
  query += '&'

      const response = await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products/${query}consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`,
        //{cache: 'no-store'},
        { next: { revalidate: 60 }}
      ).then(res => res.json())

  return response
}

export const getCategoryQuantity = async(categoryId: number) => {

}