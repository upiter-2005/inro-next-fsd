import { useState } from "react";

export const useWindowDimensions = () => {

  const [isMobile, setIsMobile] = useState(false)
  const width = window.innerWidth
  if(isMobile) setIsMobile(true)

  return {isMobile}
}