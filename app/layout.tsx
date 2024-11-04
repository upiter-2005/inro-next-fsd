import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Navigation } from "@/widgets/navigation";
import { cn } from "@/shared/helpers/cn";
import { Footer } from "@/widgets/footer";
import { Toaster } from 'react-hot-toast';
import { SearchBox } from "@/features/search/ui/serchBox";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
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
      <GoogleAnalytics gaId="G-4XLP0P9SL3" />
      <GoogleTagManager gtmId="GTM-MVW3D48G" />
      <body className={cn(arimo.className, 'bg-[#FCF9EE] color-[#111111] overflow-x-hidden')}>
        <main>
          <Header />
          <Navigation />
          <SearchBox/>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
