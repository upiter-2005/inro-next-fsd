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
  }else if(slug === 'parfumy'){
    return {
      idCat: 96,
      idName: 'Парфуми',
    }
  }else if(slug === 'dly-domu'){
    return {
      idCat: 85,
      idName: 'Для дому',
    }
  }else if(slug === 'doglyad'){
    return {
      idCat: 101,
      idName: 'Догляд',
    }
  }else if(slug === 'podarunky'){
    return {
      idCat: 98,
      idName: 'Подарунки',
    }
  }else if(slug === 'aromaty'){
    return {
      idCat: 82,
      idName: 'Аромати',
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