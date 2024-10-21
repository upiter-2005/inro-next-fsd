import Link from "next/link"
import Image from "next/image"
import { cn } from "../helpers"
import insta from "@/shared/assets/images/insta.svg"
import tg from "@/shared/assets/images/tg.svg"
import fb from "@/shared/assets/images/fb.svg"

interface ISocialsMini {
  className?: string
}

export const SocialsMini:React.FC<ISocialsMini> = ({className}) => {
  return(
    <div className={cn("flex gap-2", className)}>
      <Link href="https://www.instagram.com/inro.ua/" target="blank" className="hover:opacity-70"><Image src={insta} width={30} height={30} alt="Inro" /></Link>
      <Link href="/" target="blank" className="hover:opacity-70"><Image src={tg} width={30} height={30} alt="Inro" /></Link>
      <Link href="https://www.facebook.com/inro.ua" target="blank" className="hover:opacity-70"><Image src={fb} width={30} height={30} alt="Inro" /></Link>
    </div>
  )
}