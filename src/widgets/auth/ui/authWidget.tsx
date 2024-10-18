import { LoginUser } from "@/features/loginUser"
import { RecoveryPassword } from "@/features/recovery"
import {RegisterUser} from "@/features/registerUser"

export interface IAuthWidget {
  className?: string
  type: 'register' | "login" | "recover"
}

export const AuthWidget: React.FC<IAuthWidget> = ({ className, type }) => {

  return (
    <>
    {type === "register" && <RegisterUser />}
    {type === "login" && <LoginUser />}
    {type === "recover" && <RecoveryPassword />}
    </>
  )
}
