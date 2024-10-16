import { ProductMetaDataType } from "@/entities/product/model/types"
import { useEffect, useState } from "react"

interface IuseGetDescription {
  data: string | {}
}
export const useGetDescription = (metaData: ProductMetaDataType[], field: string):IuseGetDescription => {
  const [data, setData] = useState<string | {}>('')

  useEffect(()=>{
    const result = metaData.find((obj: ProductMetaDataType) => obj.key === field)
    if(result) setData(result.value)

  }, [])

  return {data}
}