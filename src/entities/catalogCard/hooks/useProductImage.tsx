import React, { useState } from "react"

export const useProductImage = (id: number) => {

  const [image, setImage] = useState<any>()

  React.useEffect(()=>{

    const fetchImage = async() => {
      // const imageObj = await findAttachmentById(id)
      // setImage(imageObj)
      console.log("custom hook")
    }
    fetchImage()
  }, [])

  return {
    image
  }
}