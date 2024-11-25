import { getClientId } from "./getClientId";

const MEASUREMENT_ID = "G-4XLP0P9SL3"
const API_SECRET= "xCkAyLXYSpu9RT_cZ-mtXQ"

export async function googlePurchaseApi (orderId: any, total: any, products: []) {
    const clientId = getClientId()
    console.log(clientId)
    const res = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`, {
        method: "POST",
        body: JSON.stringify({
            "client_id": clientId,
            "events": [
              {
                 "name": "purchase",
                 "params": {
                    'send_to': 'ga',
                    transaction_id: orderId,
                    value: total,
                    currency: "UAH",
                    items: products
                }
              }
            ]
           }
         )
      });
      console.log(res);
}