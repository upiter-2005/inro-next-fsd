import { getSession } from "@/shared/helpers/auth";
import { WidgetAccount } from "@/widgets/account";
import { redirect } from "next/navigation";

export async function Account() {
  const encryptedSessionData = await getSession()
  {!encryptedSessionData && redirect('/login')}
  return (
    <main className="max-w-[1220px] w-full mx-auto flex flex-col items-center justify-between">
      <WidgetAccount />
    </main>
  );
}
