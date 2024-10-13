interface IProductCardPrice {
  salePrice?: string,
  regularPrice: string
}

export const ProductCardPrice:React.FC<IProductCardPrice> = ({salePrice, regularPrice}) => {
  return (
    <div className="flex flex-col	leading-4 font-bold">
        {salePrice && ( <p className="text-[#828282] line-through">₴ {salePrice}</p>)}
        <p>₴ {regularPrice}</p>
      </div>
  )
}