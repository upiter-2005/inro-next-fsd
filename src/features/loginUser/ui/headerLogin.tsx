'use client'
import { User } from "lucide-react"
import Link from "next/link"
import { useUserStore } from "../model/actions"

export const HeaderLogin:React.FC = () => {
  const {user} = useUserStore()

  return (
    <>
    {user.name ?
    <Link href="/account" className="flex items-center gap-1"><User width={18} /><span className="lowercase text-xs ">{user && user?.name}</span></Link>
    :
      <Link href="/login" className="flex items-center gap-1"><User width={18} /></Link>
     }
    </>


  )
}