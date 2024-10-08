'use client'
import { cn } from "@/shared/helpers"
import { Checkbox } from "@/shared/ui/checkbox"
import { Input } from "@/shared/ui/form/input"
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

interface ICongratulationWords {
  className?: string
}

export const CongratulationWords:React.FC<ICongratulationWords> = ({className}) => {
  const [check, setCheck] = useState<boolean>(false)

  const {
    register,
    unregister,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()



  const handleCheck = (val:boolean): void => {

    if (!val){
      unregister("congrats_text")
    }
    setCheck(val)
  }
  return(
    <div className={cn('p-8 border-b border-b-solid border-b-[#E4E4E4]', className)}>

      <div className="flex items-center gap-2 mb-8">
      <Checkbox
        onCheckedChange={()=>handleCheck(!check)}
        checked={check}
        className="rounded-[2px] w-4 h-4"
        id={"congratulation"}
       />
       <label htmlFor="congratulation" className="cursor-pointer text-sm">Додати подарункову листівку до замовлення</label>
      </div>

      <div className={`${check ? 'max-h-40' : 'max-h-0'} max-w-[630px] w-full overflow-hidden transition-all duration-500 ease`}>
        {check && <Input type='text' name="congrats_text" placeholder="Текст привітання" /> }
      </div>
    </div>
  )
}