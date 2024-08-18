import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog"



export function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className='text-sm bg-gray-50 w-[440px] text-orange-700 text-center'>Home page</h1>
     <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </main>
  );
}
