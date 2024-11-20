const MEASUREMENT_ID = "G-4XLP0P9SL3"
const API_SECRET= "xCkAyLXYSpu9RT_cZ-mtXQ"

export async function googlePurchaseApi () {

    const res = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`, {
        method: "POST",
        body: JSON.stringify({
            "client_id": "123456.7654321",
            "events": [
              {
                 "name": "purchase",
                 "params": {
                    'send_to': 'ga',
                    transaction_id: "T_12345",
                    value: 72.05,
                    tax: 3.60,
                    shipping: 5.99,
                    currency: "USD",
                    coupon: "SUMMER_SALE",
                    items: [
                    {
                    item_id: "SKU_12346",
                    item_name: "Google Grey Women's Tee",
                    affiliation: "Google Merchandise Store",
                    coupon: "SUMMER_FUN",
                    discount: 3.33,
                    index: 1,
                    item_brand: "Google",
                    item_category: "Apparel",
                    item_category2: "Adult",
                    item_category3: "Shirts",
                    item_category4: "Crew",
                    item_category5: "Short sleeve",
                    item_list_id: "related_products",
                    item_list_name: "Related Products",
                    item_variant: "gray",
                    location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                    price: 21.01,
                    promotion_id: "P_12345",
                    promotion_name: "Summer Sale",
                    quantity: 2
                    }]
                }
              }
            ]
           }
         )
      });
}