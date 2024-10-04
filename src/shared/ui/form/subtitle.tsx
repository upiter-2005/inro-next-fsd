import { cn } from "@/shared/helpers"

interface ISubtitle {
  className?: string
  text: string
}
export const Subtitle:React.FC<ISubtitle> = ({className, text}) =>{
  return (<p className={cn("text-2xl leading-[23px] mb-6", className)}>{text}</p>)
}