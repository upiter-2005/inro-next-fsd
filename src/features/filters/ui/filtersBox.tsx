import { cn } from "@/shared/helpers"
import { Filter } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet"

import {FiltersCheckboxGroup} from './filtersCheckboxGroup'
import { useSet } from "react-use"

interface IFilterBox {
  className?: string,
  attributes: any[]
}

export const FilterBox:React.FC<IFilterBox> = ({className, attributes}) => {

  const [ml, { toggle: mlToggle }] = useSet<string>(new Set([]))
  const [noty, { toggle: notyToggle }] = useSet<string>(new Set([]))
  const [stany, { toggle: stanyToggle }] = useSet<string>(new Set([]))
  const [area, { toggle: areaToggle }] = useSet<string>(new Set([]))



  return (
    <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto')}>
      
      <Sheet>
        <SheetTrigger><Filter /></SheetTrigger>
        <SheetContent className='w-[281px] overflow-auto px-6 py-16 bg-[#fcf9ee]'>
       
          <FiltersCheckboxGroup 
            title="ML"
            name="pa_ml"
            attrId={13}
            selected={ml}
            onClickCheckbox={mlToggle}
          />
          <FiltersCheckboxGroup 
            title="Ноти"
            name="pa_noty"
            attrId={3}
            selected={noty}
            onClickCheckbox={notyToggle}
          />
          <FiltersCheckboxGroup 
            title="По станам"
            name="pa_po-stanam"
            attrId={11}
            selected={stany}
            onClickCheckbox={stanyToggle}
          />
          <FiltersCheckboxGroup 
            title="Тип приміщення"
            name="pa_typ-prymishhennya"
            attrId={12}
            selected={area}
            onClickCheckbox={areaToggle}
          />
         
         
        </SheetContent>
      </Sheet>
    </div>
  )
}