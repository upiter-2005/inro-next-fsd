'use client'

interface IProductCardPrice {
  salePrice?: string,
  regularPrice: string
}

export const ProductCardPrice:React.FC<IProductCardPrice> = ({salePrice, regularPrice}) => {
  console.log(salePrice, regularPrice)
  return (
    <div className="flex flex-col	leading-4 font-bold m-0">
        {salePrice ? ( <>
          <p className="text-[#828282] line-through m-0 whitespace-nowrap">₴ {regularPrice}</p>
          <p className="m-0 whitespace-nowrap">₴ {salePrice}</p>
        </>
      ) : (
        <p className="m-0 whitespace-nowrap">₴ {regularPrice}</p>
      )}
        
      </div>
  )
}