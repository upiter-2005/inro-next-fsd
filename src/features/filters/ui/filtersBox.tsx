'use client'
import { cn } from "@/shared/helpers"
import Image from "next/image"
import filterIco from "@/shared/assets/images/filter.svg"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/shared/ui/sheet"
import {FiltersCheckboxGroup} from './filtersCheckboxGroup'
import { useQueryFilter } from "../hooks/useQueryFilter"
import { useFilters } from "../hooks/useFilters"

interface IFilterBox {
  className?: string
}

export const FilterBox:React.FC<IFilterBox> = ({className, }) => {

  const filters = useFilters()
  useQueryFilter(filters)

  return (
    <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto')}>
      
      <Sheet>
        <SheetTrigger><Image src={filterIco} width={24} height={24} alt="Inro filter" /></SheetTrigger>
        <SheetContent className='w-[281px] overflow-auto px-6 py-16 bg-[#fcf9ee]'>
          <FiltersCheckboxGroup 
            title="Об'єм"
            name="pa_ml"
            attrId={13}
            selected={filters.ml}
            onClickCheckbox={filters.mlToggle}
          />
          <FiltersCheckboxGroup 
            title="Ноти"
            name="pa_noty"
            attrId={3}
            selected={filters.noty}
            onClickCheckbox={filters.notyToggle}
          />
          <FiltersCheckboxGroup 
            title="По станам"
            name="pa_po_stanam"
            attrId={11}
            selected={filters.stany}
            onClickCheckbox={filters.stanyToggle}
          />
          <FiltersCheckboxGroup 
            title="Тип приміщення"
            name="pa_typ_prymishhennya"
            attrId={12}
            selected={filters.area}
            onClickCheckbox={filters.areaToggle}
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}