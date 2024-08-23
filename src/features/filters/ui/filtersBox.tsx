import { cn } from "@/shared/helpers"
import { Filter } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet"

import {FiltersCheckboxGroup} from './filtersCheckboxGroup'

interface IFilterBox {
  className?: string,
  attributes: any[]
}

export const FilterBox:React.FC<IFilterBox> = ({className, attributes}) => {
  console.log(attributes);


  return (
    <div className={cn(className, 'flex flex-wrap max-w-[1200px] w-full my-0 mx-auto')}>
      
      <Sheet>
        <SheetTrigger><Filter /></SheetTrigger>
        <SheetContent className='w-[281px] overflow-auto'>
          {attributes.map(filterObject => (
            <FiltersCheckboxGroup 
            title={filterObject.name}
            name={filterObject.slug}
            attrId={filterObject.id}
          />
          ))}
        
        </SheetContent>
      </Sheet>
    </div>
  )
}