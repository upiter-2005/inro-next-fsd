import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro";
import { AuthWidget } from "@/widgets/auth";


export async function Register() {

  return (
    <main className="flex flex-col items-center justify-between">
       <BreadcrumbsInro
          current="Створити акаунт"
        />

     <AuthWidget type="register" />
    </main>
  );
}
