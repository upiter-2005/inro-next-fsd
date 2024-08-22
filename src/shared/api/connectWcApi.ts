const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

export const api = new WooCommerceRestApi({
    url: process.env.NEXT_API_HOST,
    consumerKey: process.env.NEXT_WC_CUSTOMER_KEY,
    consumerSecret: process.env.NEXT_WC_SECRET,
    version: "wc/v3"
  });