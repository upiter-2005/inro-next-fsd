interface IProductCategoryTags {
  categories: string[]
}

export const ProductCategoryTags:React.FC<IProductCategoryTags> = ({categories}) => {
  return (
    <>
      {categories.map(
        (cat, i) => <span key={`${cat}-${i}`} className="inline-block py-2 px-6 rounded-[10px] border-[1px] border-[#111] text-sm">{cat}</span>
      )}
    </>
  )
}