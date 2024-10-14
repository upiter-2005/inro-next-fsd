import Link from "next/link"
import Image from "next/image"
import { cn } from "../helpers"
import insta from "@/shared/assets/images/insta.svg"
import tg from "@/shared/assets/images/tg.svg"
import fb from "@/shared/assets/images/fb.svg"

interface ISocials {
  className?: string
}

export const Socials:React.FC<ISocials> = ({className}) => {
  return(
    <div className={cn("flex gap-2", className)}>
      <Link href="/" target="blank" className="hover:opacity-70"><Image src={insta} width={48} height={48} alt="Inro" /></Link>
      <Link href="/" target="blank" className="hover:opacity-70"><Image src={tg} width={48} height={48} alt="Inro" /></Link>
      <Link href="/" target="blank" className="hover:opacity-70"><Image src={fb} width={48} height={48} alt="Inro" /></Link>
    </div>
  )
}