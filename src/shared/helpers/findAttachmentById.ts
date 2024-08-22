import {axiosInstance} from '../api/instance'

export const findAttachmentById = async(imgId: number) =>{
  await axiosInstance(`${process.env.NEXT_API_HOST}/wp-json/wp/v2/media/${imgId}`)
  .then((image: any) => {return image}) 
}