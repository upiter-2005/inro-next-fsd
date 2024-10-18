import { getSession } from "@/shared/helpers/auth";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb"
import { AuthWidget } from "@/widgets/auth";
import { redirect } from "next/navigation";


export async function Recover() {

  const encryptedSessionData = await getSession()
  {!encryptedSessionData && redirect('/login')}

  return (
    <main className="flex flex-col items-center justify-between">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Головна</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Змінити пароль</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

      </div>

     <AuthWidget type="recover" />
    </main>
  );
}
