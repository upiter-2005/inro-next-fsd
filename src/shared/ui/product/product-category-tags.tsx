interface IProductCategoryTags {
  categories: string[]
}

export const ProductCategoryTags:React.FC<IProductCategoryTags> = ({categories}) => {
  return (
    <>
      {categories.map(
        (cat, i) => <span key={`${cat}-${i}`} className=" py-2 px-4 rounded-[10px] border-[1px] border-[#111] text-xs inline-flex items-center justify-center text-center">{cat}</span>
      )}
    </>
  )
}