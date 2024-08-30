import { productApi } from "@/shared/api";

export interface ISearchParamsTypes {
  pa_noty?: string
  pa_ml?: string
  pa_po_stanam?: string
  pa_typ_prymishhennya?: string
}
export const findProduct = async(searchParams:ISearchParamsTypes) => {

    let qs = 'products?'
      if(searchParams.pa_ml) qs += `attribute=pa_ml&attribute_term=${searchParams.pa_ml}`
      if(searchParams.pa_noty) qs += `&attribute=pa_noty&attribute_term=${searchParams.pa_noty}`
      if(searchParams.pa_po_stanam) qs += `&attribute=pa_po_stanam&attribute_term=${searchParams.pa_po_stanam}&`
      if(searchParams.pa_typ_prymishhennya) qs += `&attribute=pa_typ_prymishhennya&attribute_term=${searchParams.pa_typ_prymishhennya}&`


  const response = await productApi.getProducts(qs)

  return response
}