import { cn } from "@/shared/helpers"
import { useFormContext } from "react-hook-form"
import { ErrorText } from "./errorText"
import { Eye, EyeOff } from "lucide-react"

interface InputType {
  className?: string
  placeholder: string
  type?: 'text' | string
  name?: string
  eye?: boolean,
  changeType?: () => void
}

export const Input:React.FC<InputType> = ({className, type, placeholder, name, eye, changeType}) => {

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
        <input type={type} placeholder={placeholder} {...register(name)} className={cn('text-sm w-full p-0 pb-3 mb-8 border border-solid border-transparent border-b-[#111]  bg-transparent placeholder:text-[#959595] focus-within:outline-none autofill:bg-transparent', className)} />
      ): (
        <input type={type} placeholder={placeholder} className={cn('text-sm w-full p-0 pb-3 mb-8 border border-solid border-transparent border-b-[#111]  bg-transparent placeholder:text-[#959595] focus-within:outline-none autofill:bg-transparent', className)} />
      )}
      {eye && <div className="absolute top-1 right-1 cursor-pointer" onClick={changeType}>
        {type == "text" ?   <Eye width={18} /> : <EyeOff width={18} />}
      </div>}
      
      {errotText && <ErrorText text={type === 'hidden' ? 'Оберіть місто та відділення' : errotText} className={`absolute  text-xs ${type === 'hidden' ? '-bottom-[100px]' : 'bottom-[12px]'}  `} />}
    </div>
  )
}