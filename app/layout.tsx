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
import { Suspense } from "react";
import { FacebookPixelEvents } from "@/shared/helpers/pixel-events";

import Analytics from "@/shared/helpers/Analitics"
import Script from "next/script";

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
      <meta name="google-site-verification" content="WWObvI45hqAlB7FWzAptdEcFx8_37_4draelu4VSSlY" />
       {/* <Suspense><GoogleAnalytics gaId="G-4XLP0P9SL3"  /></Suspense>
      <Suspense><GoogleTagManager gtmId="GTM-MVW3D48G" /></Suspense> */}
      
   

      
      <body className={cn(arimo.className, 'bg-[#FCF9EE] color-[#111111] overflow-x-hidden')}>
    
        <main>
          <Header />
          <Navigation />
          <SearchBox/>
          {children}
        </main>
        
        <Footer />
        <Toaster />
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        {/* <Suspense><Analytics/></Suspense> */}
      <Suspense>
      <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4XLP0P9SL3" />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-MVW3D48G}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `

          <!-- Google tag (gtag.js) -->
            
           
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4XLP0P9SL3', { 'groups': 'ga' });
            gtag('config', 'AW-10959429249', { 'groups': 'ads' });
            



    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-MVW3D48G');
  `,
        }}
      />
    </></Suspense>
      </body>
    </html>
  );
}
