import {RegisterUser} from "@/features/registerUser"

export interface IAuthWidget {
  className?: string
  type: 'register' | "login"
}

export const AuthWidget: React.FC<IAuthWidget> = ({ className, type }) => {

  return (
    <>{type === "register" && <RegisterUser />}</>
  )
}
