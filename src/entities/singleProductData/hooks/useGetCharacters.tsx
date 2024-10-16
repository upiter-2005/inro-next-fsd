import { ProductMetaDataType } from "@/entities/product/model/types"
import { useEffect, useState } from "react"

interface IuseGetDescription {
  chars: React.ReactNode
}
export const useGetCharacters = (attributes: any[]):IuseGetDescription => {
  console.log(attributes);
  const [chars, setChars] = useState<React.ReactNode>(null)

  useEffect(()=>{
    const result = attributes.map((obj, i) => (<div key={i} className="flex justify-between items-center py-2 px-3 border-b border-b-[#c1c1c1] last:border-none last:pb-0 ">
      <div className="text-sm font-bold w-1/2">{obj.name}</div>
      <div className="pr-2 w-1/2">{obj.options?.join(", ")}</div>
    </div>))
    console.log(result);
    setChars(result)
  }, [])

  return {chars}
}