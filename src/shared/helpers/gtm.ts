// lib/gtm.ts
type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[]
  }
  
  declare const window: WindowWithDataLayer
  
  export const GTM_ID = "GTM-MVW3D48G"
  
  export const pageview = (url: string) => {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "pageview",
        page: url        

      })
      window.dataLayer.push({
        "event": "pageview",
        "page": url,
        "send_to": 'ads',
        'items': [
              {
                'id': 5944,
                'google_business_vertical': 'retail'
              },
              {
                'id': 5956,
                'google_business_vertical': 'retail'
              },
              {
                'id': 7653,
                'google_business_vertical': 'retail'
              },
              {
                'id': 4700,
                'google_business_vertical': 'retail'
              },
              {
                'id': 5925,
                'google_business_vertical': 'retail'
              },
              {
                'id': 6284,
                'google_business_vertical': 'retail'
              },
              {
                'id': 5880,
                'google_business_vertical': 'retail'
              },
            ]
      })
    } else {
      console.log({
        event: "pageview",
        page: url,
      })
    }
  }