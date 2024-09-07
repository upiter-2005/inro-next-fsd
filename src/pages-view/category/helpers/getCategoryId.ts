import {categoriesObj} from '@/shared/constants/categories'

export const getCategoryId = (slug: string): any => {
  const result: any = categoriesObj.find(el => {
                  return el.child.find(el => el.slug === slug)
                })
  return result?.child.find((el: any) => el.slug === slug).id
  
}