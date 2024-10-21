import { getSession } from "@/shared/helpers/auth";
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro";
import { AuthWidget } from "@/widgets/auth";
import { redirect } from "next/navigation";


export async function Login() {

  const encryptedSessionData = await getSession()
  {encryptedSessionData && redirect('/account')}

  return (
    <main className="flex flex-col items-center justify-between">

        <BreadcrumbsInro
          current="Увійти в кабінет"
        />



     <AuthWidget type="login" />
    </main>
  );
}
