'use client'
import Image from 'next/image'
import Link from "next/link"
import { useUserStore } from "../model/actions"
import User from "@/shared/assets/images/user.svg"

export const HeaderLogin:React.FC = () => {
  const {user} = useUserStore()

  return (
    <>
      <Link href="/account" className="flex items-center gap-1"><Image src={User} width={20} height={20}  alt='' /></Link>
    </>


  )
}