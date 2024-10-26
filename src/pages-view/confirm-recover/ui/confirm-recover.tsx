import { getSession } from "@/shared/helpers/auth";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb"
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro";
import { AuthWidget } from "@/widgets/auth";
import { redirect } from "next/navigation";


export async function ConfirmRecover() {

  // const encryptedSessionData = await getSession()
  // {!encryptedSessionData && redirect('/login')}

  return (
    <main className="flex flex-col items-center justify-between">
       <BreadcrumbsInro
          pathsObject={{name:"Обліковий кабінет", link: "/account"}}
          current="Підтвердження зміни паролю"
        />

     <AuthWidget type="confirm-recover" />
    </main>
  );
}
