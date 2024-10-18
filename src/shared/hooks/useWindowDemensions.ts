import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=> {
    if(window.innerWidth < 992) setIsMobile(true)
  }, [])

  return {isMobile}
}