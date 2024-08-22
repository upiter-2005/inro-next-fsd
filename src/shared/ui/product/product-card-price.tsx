interface IProductCardPrice {
  salePrice?: string, 
  regularPrice: string
}

export const ProductCardPrice:React.FC<IProductCardPrice> = ({salePrice, regularPrice}) => {
  return (
    <div className="flex flex-col font-light	leading-4">
        {salePrice && ( <p className="text-[#828282] line-through">₴ 1250</p>)}
        <p>₴ {regularPrice}</p>
      </div>
  )
}