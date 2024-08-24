import { cn } from "@/shared/helpers"
import {Checkbox} from "@/shared/ui/checkbox"

export interface IFiltersCheckbox {
  text: string
  value: string
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
  name?: string
  className?: string
}

export const FiltersCheckbox:React.FC<IFiltersCheckbox> = ({ 
  className,
  text,
  value,
  onCheckedChange,
  checked,
  name
}) => {
  return(
    <div className='flex items-center space-x-2 py-3'>
      <Checkbox 
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[2px] w-4 h-4"
        id={`checkbox-${String(name)}-${String(value)}`}
       />
      <label htmlFor={`checkbox-${String(name)}-${String(value)}`}>{text}</label>
    </div>
  )
}