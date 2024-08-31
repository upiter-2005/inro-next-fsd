import { ICategories } from "@/entities/categories/model/types";
import { useEffect, useState } from "react";

interface IReturnProps {
  items: string[]
}

export const useGetCategories = (categories: ICategories[]):IReturnProps => {
  const [items, setItems] = useState<string[]>([])

  useEffect(()=>{
    const result = categories.map(cat => cat.name)
    setItems(result)
  }, [categories])

  return {items}
}