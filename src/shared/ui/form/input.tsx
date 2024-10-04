import { cn } from "@/shared/helpers"

interface InputType {
  className?: string  
  placeholder: string
  type?: 'text' | string 
}

export const Input:React.FC<InputType> = ({className, type, placeholder}) => {
  return(<>
    <input type={type} placeholder={placeholder} className={cn('text-sm w-full p-0 pb-3 mb-8 border border-solid border-transparent border-b-[#111]  bg-transparent placeholder:text-[#959595]', className)} />
  </>)
}