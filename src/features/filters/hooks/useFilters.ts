import { useSearchParams } from "next/navigation"
import { useSet } from "react-use"


interface IQueryFilters {
  pa_noty: string
  pa_ml: string
  pa_po_stanam: string
  pa_typ_prymishhennya: string
}
export const useFilters= () => {

  const searchParams = useSearchParams() as unknown as Map<keyof IQueryFilters, string>
  
  
  const [ml, { toggle: mlToggle }] = useSet<string>(new Set<string>(
    searchParams.get('pa_ml')?.split(',') || []
  ))
  const [noty, { toggle: notyToggle }] = useSet<string>(new Set(
    searchParams.get('pa_noty')?.split(',') || []
  ))
  const [stany, { toggle: stanyToggle }] = useSet<string>(new Set(
    searchParams.get('pa_po_stanam')?.split(',') || []
  ))
  const [area, { toggle: areaToggle }] = useSet<string>(new Set(
    searchParams.get('pa_typ_prymishhennya')?.split(',') || []
  ))

  return {
    ml,
    noty,
    stany,
    area,
    mlToggle,
    notyToggle,
    stanyToggle,
    areaToggle
  }
}