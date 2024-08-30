import { cn } from "@/shared/helpers"
import { Filter } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet"

import {FiltersCheckboxGroup} from './filtersCheckboxGroup'


import { useQueryFilter } from "../hooks/useQueryFilter";
import { useFilters } from "../hooks/useFilters";

interface IFilterBox {
  className?: string
}

export const FilterBox:React.FC<IFilterBox> = ({className, }) => {

  const filters = useFilters()

  useQueryFilter(filters)


  return (
    <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto')}>
      
      <Sheet>
        <SheetTrigger><Filter /></SheetTrigger>
        <SheetContent className='w-[281px] overflow-auto px-6 py-16 bg-[#fcf9ee]'>
       
          <FiltersCheckboxGroup 
            title="ML"
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