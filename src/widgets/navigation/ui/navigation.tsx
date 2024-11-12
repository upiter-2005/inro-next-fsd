'use client'
import { cn } from "@/shared/helpers/cn"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {categoriesObj} from "@/shared/constants/categories"
import { ChevronUp } from "lucide-react";
import Image from "next/image"

interface INavigation {
  className?: string
}

export const Navigation:React.FC<INavigation> = ({className}) => {
  return (
    <div className={cn('max-w-[1200px] w-full none hidden md:block', className)}>
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center pt-2 items-center">
      <NavigationMenu.List className=" w-full m-0 flex items-center list-none gap-[50px]  border-t-[#E4E4E4] border-t-[1px] border-b-[#E4E4E4] border-b-[1px]">
      <NavigationMenu.Item >
          <NavigationMenu.Link
            className="px-3 py-4 text-[15px] font-medium outline-none flex items-center h-full whitespace-nowrap"
            href="/catalog"
          >
            Каталог
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11   block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none "
            href="/category/novinki-uk">
            Новинки
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {categoriesObj.map((cat) =>

        <NavigationMenu.Item key={`category_${cat.id}`} >
          {cat.child.length ? (<>

          <NavigationMenu.Trigger className=" hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-2 py-4 text-[15px] font-medium leading-none outline-none  whitespace-nowrap">
            <NavigationMenu.Link
                className="text-violet11  block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none "
                href={`/category/${cat.slug}`}>{cat.name}
            </NavigationMenu.Link>
                <ChevronUp className="w-3 relative rotate-180 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-0" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto p-4 flex bg-[#111]">
                  <div className="w-[240px] h-[240px] overflow-hidden">
                    {cat.image && <Image src={cat.image} alt={cat.name} width={240} height={240} className="w-full h-full rounded-xl" />}
                    
                  </div>
                <div className="flex-1">
                    <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3 shadow-violet7 ">
                      {cat.child?.map(el =>  ( <li key={el.id}><a href={`/category/${el.slug}`} className="text-base text-[#fcf9ee]">{el.name}</a></li>))}
                    </ul>
                </div>

              </NavigationMenu.Content>
            </>
             
          ) : (
            <NavigationMenu.Link
              className="text-violet11   block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none "
              href={`/category/${cat.slug}`}>
              {cat.name}
          </NavigationMenu.Link>
          )}
          
        </NavigationMenu.Item>
        )}


        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11   block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none "
            href="/category/aromati-dlya-avto">
            Аромати для авто
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>

    </div>
  )
}