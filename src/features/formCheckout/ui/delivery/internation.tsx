'use client'
import { cn } from "@/shared/helpers"
import { Input } from "@/shared/ui/form/input"

interface IInternational {
  className?: string  
}

export const International:React.FC<IInternational> = ({className}) => {
  return(
    <div className={cn('', className)}>

      <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
        <Input type='text' placeholder="Країна" />
        <Input type='text' placeholder="Населений пункт" />
      </div>

      <div className="flex items-center justify-between gap-6 max-w-[630px] w-full">
        <Input type='text' placeholder="Адреса" />
        <Input type='text' placeholder="ZIP-code" />
      </div>

    </div>
  )
}