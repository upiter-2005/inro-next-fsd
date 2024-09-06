'use client'
import { cn } from "@/shared/helpers/cn"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {categoriesObj} from "@/shared/constants/categories"

interface INavigation {
  className?: string
} 

export const Navigation:React.FC<INavigation> = ({className}) => {
  return (
    <div className={cn('max-w-[1200px]', className)}>
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center py-2 ">
      <NavigationMenu.List className=" w-full m-0 flex list-none gap-[60px] py-4 border-t-[#E4E4E4] border-t-[1px] border-b-[#E4E4E4] border-b-[1px]">
        {/* <NavigationMenu.Item>

          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Learn{' '}
             <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            /> 
          </NavigationMenu.Trigger>
          
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] bg-[#111]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link >
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item> */}

        {categoriesObj.map((cat) => 
       
        <NavigationMenu.Item key={`category_${cat.id}`} >
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          {cat.name}
            
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto ">
            <div className="flex">
                <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[900px] sm:grid-flow-col sm:grid-rows-3 shadow-violet7">
                  {cat.child?.map(el =>  ( <li key={el.id}><a href={`/${el.slug}`}>{el.name}</a></li>))}
                </ul>
            </div>
          
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        )}
        

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="/aromati-dlya-avto"
          >
            Аромати в авто
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