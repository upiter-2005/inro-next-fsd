import { useUserStore } from "@/features/loginUser/model/actions";
import { api } from "@/shared/api/connectWcApi";
import { getSession } from "@/shared/helpers/auth";
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro";
import { WidgetAccount } from "@/widgets/account";
import { redirect } from "next/navigation";


export async function Account() {
  const encryptedSessionData = await getSession()
  {!encryptedSessionData && redirect('/login')}

  return (
    <>
      <BreadcrumbsInro
        current="Обліковий кабінет"
      />
    <main className="max-w-[1220px] w-full mx-auto flex flex-col items-center justify-between">
      <WidgetAccount />
    </main>
  </>

  );
}
