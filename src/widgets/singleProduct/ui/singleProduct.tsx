import { IProduct } from "@/entities/product/model/types";
import { cn } from "@/shared/helpers";

interface ISingleProduct {
  product: IProduct,
  className?: string
}
export const SingleProduct:React.FC<ISingleProduct> = ({product, className}) => {

  console.log(product);

  if(!product) return 'product not found!'
  
  return <div className={cn(className, '')}>
    <h1>asdasdad</h1>
    {product.name}
  </div>;
}