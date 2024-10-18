'use client'
import { IProduct } from "@/entities/product/model/types"
import { cn } from "@/shared/helpers"
import { useGetCategories } from "../hooks/useGetCategiries"
import { ProductCategoryTags } from "@/shared/ui/product/product-category-tags"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import { useGetDescription } from "../hooks/useGetDescription"
import { useGetCharacters } from "../hooks/useGetCharacters"

type ProductDataType = Pick<IProduct,"images" | "name" | "categories" | "price" | "short_description" | "meta_data" | "attributes">

interface ISingleProductData{
  className?: string
  product: ProductDataType
  addCartAction: React.ReactNode
  addToFavouriteAction: React.ReactNode
}

export const SingleProductData:React.FC<ISingleProductData> = ({className, product, addCartAction, addToFavouriteAction }) =>{
  const {data: opys} = useGetDescription(product.meta_data, "opys")
  const {data: howTouse} = useGetDescription(product.meta_data, "sposob")
  const {chars} = useGetCharacters(product.attributes)

  const {items: categories} = useGetCategories(product.categories)
  return <div className={cn(className, 'flex flex-col gap-6 font-light')}>

      <h1 className="font-light text-xl md:text-4xl md:leading-9">{product.name}</h1>
      <div className="flex gap-[10px]">
        <ProductCategoryTags categories={categories} />
      </div>
      <div dangerouslySetInnerHTML={{__html: product.short_description}} className="leading-5"></div>
      <div className="text-2xl font-semibold tracking-wide">₴ {product.price}</div>
      <div className="flex gap-2 border-b border-b-[#c1c1c1] pb-8">
        {addCartAction}
        {addToFavouriteAction}
      </div>

      <div>
        <Accordion  type="single" collapsible >
          <AccordionItem value="describe" className="border-b border-b-[#c1c1c1] px-4 ">
            <AccordionTrigger className="py-4">Опис</AccordionTrigger>
            <AccordionContent>
            <div dangerouslySetInnerHTML={{__html: opys}} className="leading-5"></div>

            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion  type="single" collapsible >
          <AccordionItem value="howToUse" className="border-b border-b-[#c1c1c1] px-4 pb-5">
            <AccordionTrigger className="py-4">Характеристики</AccordionTrigger>
            <AccordionContent className="border border-[#c1c1c1] rounded-[8px]">
            {chars}

            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion  type="single" collapsible >
          <AccordionItem value="howToUse" className="border-b border-b-[#c1c1c1] px-4">
            <AccordionTrigger className="py-4">Спосіб застосування</AccordionTrigger>
            <AccordionContent>
            <div dangerouslySetInnerHTML={{__html: howTouse}} className="leading-5"></div>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>



  </div>
}