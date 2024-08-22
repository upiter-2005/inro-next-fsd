import Image from 'next/image';
import {productApi} from "@/shared/api"


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb"


export async function Home() {

  const result = await productApi.getProducts()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

      </div>

     <h1 className='text-sm bg-gray-50 w-[440px] text-orange-700 text-center'>Home page</h1>
  
 {result.map(( product: any) => (<p key={product.id}>{product.name}</p>))}

    </main>
  );
}
