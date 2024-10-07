import { cn } from "@/shared/helpers"
import { useFormContext } from "react-hook-form"
import { ErrorText } from "./errorText"

interface InputType {
  className?: string
  placeholder: string
  type?: 'text' | string
  name?: string
}

export const Input:React.FC<InputType> = ({className, type, placeholder, name}) => {

  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()
  
  let errotText: string = ''
  if(name) {errotText = errors?.[name]?.message as string}

  return(
    <div className="relative w-full">
      {name ? (
        <input type={type} placeholder={placeholder} {...register(name)} className={cn('text-sm w-full p-0 pb-3 mb-8 border border-solid border-transparent border-b-[#111]  bg-transparent placeholder:text-[#959595]', className)} />
      ): (
        <input type={type} placeholder={placeholder} className={cn('text-sm w-full p-0 pb-3 mb-8 border border-solid border-transparent border-b-[#111]  bg-transparent placeholder:text-[#959595]', className)} />
      )}

      {errotText && <ErrorText text={errotText} className="absolute bottom-[12px] text-xs" />}
    </div>
  )
}