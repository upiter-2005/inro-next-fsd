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


export async function Login() {

  const encryptedSessionData = await getSession()

  {encryptedSessionData && redirect('/account')}
  
  return (
    <main className="flex flex-col items-center justify-between">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Register</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

      </div>

     <AuthWidget type="login" />
    </main>
  );
}
