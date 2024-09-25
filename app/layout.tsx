import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Navigation } from "@/widgets/navigation";
import { cn } from "@/shared/helpers/cn";
import { Footer } from "@/widgets/footer";
const arimo = Arimo({ subsets: ["cyrillic"] });

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
      <body className={cn(arimo.className, 'bg-[#FCF9EE] color-[#111111] overflow-x-hidden')}>
        <main>
          <Header />
          <Navigation />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
