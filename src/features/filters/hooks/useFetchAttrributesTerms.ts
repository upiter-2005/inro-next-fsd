
import React, { useMemo, useState } from 'react'
import { axiosInstance } from '@/shared/api/instance'

type TermType = {
  slug: string,
  name: string,
  id: number,
}
interface ReturnProps  {
  terms: TermType[]
}

export const useFetchAttributesTerms = (id: number):ReturnProps => {

  const [terms, setTerms] = useState<TermType[]>([])

  React.useEffect(()=>{
    async function fetchTerms(id: number){
      const response = await axiosInstance.get<[]>(`https://www.inro.com.ua/wp-json/wc/v3/products/attributes/${id}/terms?consumer_key=ck_7d0a0a541e4fc91baf8b23e22031cf8502c76b24
&consumer_secret=cs_84669f4a9e954e566d4817d059786263b9a05ef7`)
      setTerms(response.data)
      return (response.data);
    }

    fetchTerms(id)

  }, [id])


  


  return {terms}
}