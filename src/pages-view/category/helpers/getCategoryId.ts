import {categoriesObj} from '@/shared/constants/categories'

export const getCategoryId = (slug: string): any => {
  if(slug === 'novinki-uk'){
    return {
      idCat: 92,
      idName: 'Новинки',
    }
  }
  else if(slug === 'aromati-dlya-avto'){
    return {
      idCat: 161,
      idName: 'Аромати для авто',
    }
  }else{
    const result: any = categoriesObj.find(el => {
      return el.child.find(el => el.slug === slug)
    })
    return {
      idCat: result?.child.find((el: any) => el.slug === slug).id,
      idName: result?.child.find((el: any) => el.slug === slug).name,
    }
  }
  

}