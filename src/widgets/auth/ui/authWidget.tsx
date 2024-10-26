import { LoginUser } from "@/features/loginUser"
import { ConfirmPassword, RecoveryPassword } from "@/features/recovery"
import {RegisterUser} from "@/features/registerUser"

export interface IAuthWidget {
  className?: string
  type: 'register' | "login" | "recover" | "confirm-recover"
}

export const AuthWidget: React.FC<IAuthWidget> = ({ className, type }) => {

  return (
    <>
    {type === "register" && <RegisterUser />}
    {type === "login" && <LoginUser />}
    {type === "recover" && <RecoveryPassword />}
    {type === "confirm-recover" && <ConfirmPassword />}
    </>
  )
}
