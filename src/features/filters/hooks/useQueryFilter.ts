import { useRouter } from "next/navigation"
import { useEffect } from "react"
import qs from "qs"

interface IFilters {
  noty: Set<string>
  ml: Set<string>
  stany: Set<string>
  area: Set<string>
}
export const useQueryFilter = (filters: IFilters) => {
  const router= useRouter()

  console.log(filters);
  useEffect(()=>{

    const params = {
      pa_noty: Array.from(filters.noty),
      pa_ml: Array.from(filters.ml),
      pa_po_stanam: Array.from(filters.stany),
      pa_typ_prymishhennya: Array.from(filters.area)
    }
    const query = qs.stringify(params,{
      arrayFormat: 'comma'
    })

  
    router.push(`?${query}`, {
      scroll: false
    })
  }, [filters, router])

}