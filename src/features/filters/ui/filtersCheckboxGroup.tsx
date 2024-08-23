'use client'
import { cn } from "@/shared/helpers"
import {FiltersCheckbox, IFiltersCheckbox} from './filtersCheckbox'
import { useFetchAttributesTerms } from "../hooks/useFetchAttrributesTerms"
import { useMemo } from "react"


type TermType = {
  slug: string,
  name: string,
  id: number,
}


interface IFiltersCheckboxGroup {
  className?: string
  attrId: number
  title: string
  loading?: boolean
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selected?: Set<string>;
  name: string
}


export const FiltersCheckboxGroup:React.FC<IFiltersCheckboxGroup> = ({className, title, loading, onClickCheckbox, defaultValue, selected, name, attrId}) => {

  const {terms} = useFetchAttributesTerms(attrId)

  return(
    <div className={cn(className)}>
      {title}


    {terms?.map(item => (
      <FiltersCheckbox
        onCheckedChange={(checked)=>console.log(checked)}
        //checked={true}
        value={item.slug}
        name={item.name}
        text={item.name}
      />
      ))}
      
    </div>
  )
}