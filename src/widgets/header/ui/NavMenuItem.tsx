'use client'
import { cn } from "@/shared/helpers"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import Link from "next/link"

interface INavMenuItem {
  className?: string
  cat?: any,
  closeMnu?: ()=>void
}

export const NavMenuItem:React.FC<INavMenuItem> = ({className, cat, closeMnu}) => {

    return (
         <div className={cn('', className)}>

            <Accordion  type="single" collapsible >
              <AccordionItem value={`cat-${cat.id}`} className="border-b-0 ">
                <AccordionTrigger className="py-3">{cat.name}</AccordionTrigger>
                <AccordionContent>

                {cat.child?.map((subcat: any) => <div key={`${subcat.id}-${subcat.slug}`} className="pl-3 py-1">
                  <Link  href={`/category/${subcat.slug}`} onClick={closeMnu}>{subcat.name}</Link>
                  </div>
              )}

                </AccordionContent>
              </AccordionItem>
            </Accordion>

         </div>

     )
}