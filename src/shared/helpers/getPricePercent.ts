export const getPricePercent = (price: any, sale: any): string => {
    return ((1 - (sale / price)) * 100).toFixed(0)
}