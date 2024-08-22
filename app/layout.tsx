import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "@/widgets/header";
import { cn } from "@/shared/helpers/cn";

const arimo = Arimo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inro",
  description: "Inro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(arimo.className, 'bg-[#FCF9EE] color-[#111111]')}>
        <main>
          <Header></Header>
          {children}
        </main></body>
    </html>
  );
}
