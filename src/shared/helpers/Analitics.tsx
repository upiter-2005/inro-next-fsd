// Analytics.tsx
"use client"

import { GTM_ID, pageview } from "./gtm"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
      console.log('pageview')
    }
  }, [pathname, searchParams])

//   if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
//     return null
//   }

  return (
    <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4XLP0P9SL3" />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
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
    })(window,document,'script','dataLayer', '${GTM_ID}');
  `,
        }}
      />
    </>
  )
}