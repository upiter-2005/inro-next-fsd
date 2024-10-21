import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb"

// <BreadcrumbsInro pathsObject={name:"Мило", link:"mylo-inro"} simple={false} current="категория міло"} />
interface IBreadcrumbsInro {
  pathsObject?:
    {
      name: string,
      link: string
    }
  current: string
}
export const BreadcrumbsInro:React.FC<IBreadcrumbsInro> = ({pathsObject, current}) => {
  return(
    <div className="w-full max-w-[1200px] m-auto text-left">
    <Breadcrumb className="py-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Головна</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathsObject && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={pathsObject.link} className="capitalize ">{pathsObject.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>

        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{current}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>

    </Breadcrumb>
  </div>

  )
}