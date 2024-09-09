import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import icon from "@/shared/assets/images/search.svg"

interface ISearchProps {
  className?: string
}

export const Search:React.FC<ISearchProps> = ({className}) => {
  return (
    <div className={cn(className, '')}>
      <Image src={icon} alt="inro" width={17} height={17} />
    </div>
  )
}