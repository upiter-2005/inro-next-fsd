
import { cn } from "@/shared/helpers"
import {FiltersCheckbox, IFiltersCheckbox} from './filtersCheckbox'
import useSWR from 'swr'
import { fetcher } from "../helpers/fetcher"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"

type TermType = {
  slug: string,
  name: string,
  id: number,
}

interface IFiltersCheckboxGroup {
  className?: string
  attrId: number
  title: string
  loading?: boolean
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selected?: Set<string>;
  name: string
}

export const FiltersCheckboxGroup:React.FC<IFiltersCheckboxGroup> = ({
  className,
  title,
  loading,
  onClickCheckbox,
  defaultValue,
  selected,
  name,
  attrId
}) => {
  const { data, error, isLoading } = useSWR<TermType[]>(`https://www.api.inro.com.ua/wp-json/wc/v3/products/attributes/${attrId}/terms?consumer_key=ck_7d0a0a541e4fc91baf8b23e22031cf8502c76b24
    &consumer_secret=cs_84669f4a9e954e566d4817d059786263b9a05ef7`, fetcher)


    if(isLoading) return <p>Loading</p>

  return(
    <div className={cn(className)}>

      <Accordion  type="single" collapsible >
        <AccordionItem value={`item-${attrId}`} className="border-b-0 ">
          <AccordionTrigger className="py-3">{title}</AccordionTrigger>
          <AccordionContent>

            {data?.map((item) => (
              <FiltersCheckbox
                key={item.id}
                onCheckedChange={()=>onClickCheckbox?.(item.id.toString())}
                checked={selected?.has(item.id.toString())}
                value={item.slug}
                name={item.name}
                text={item.name}
              />
              ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}


