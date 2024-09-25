/**
 * 
 * @url string  
 * @param init 
 * @returns server response
 */
export const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())