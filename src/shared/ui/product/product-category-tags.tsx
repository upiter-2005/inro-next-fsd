interface IProductCategoryTags {
  categories: string[]
}

export const ProductCategoryTags:React.FC<IProductCategoryTags> = ({categories}) => {
  return (
    <>
      {categories.map(
        cat => <span className="inline-block py-2 px-11 rounded-[10px] border-[1px] border-[#111] text-sm">{cat}</span>
      )}
    </>
  )
}