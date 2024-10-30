'use client'
import { CircleUserRound, User } from "lucide-react"
import Link from "next/link"
import { useUserStore } from "../model/actions"

export const HeaderLogin:React.FC = () => {
  const {user} = useUserStore()

  return (
    <>
      <Link href="/account" className="flex items-center gap-1"><User  width={24} /></Link>
    </>


  )
}