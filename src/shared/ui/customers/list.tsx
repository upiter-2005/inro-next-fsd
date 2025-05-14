'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/shared/ui/table"

  
interface IList {
    customers: any[]
}

export const List:React.FC<IList> = ({customers}) => {

    console.log(customers)
    return <div className="max-w-[1200px] m-auto">
        <h1 className="font-bold text-center my-7 text-2xl">Список зареєстрованних клієнтів</h1>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead >Date register</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Phone</TableHead>
               
                </TableRow>
            </TableHeader>
            <TableBody>
                {customers?.sort(function(a, b) { 
                    return - ( a.id - b.id  ||  a.first_name.localeCompare(b.first_name) );
                }).map((el: any, i: number) => 
                    <TableRow key={i}>
                        <TableCell>{el.id}</TableCell>
                        <TableCell >{el.date_created_gmt}</TableCell>
                        <TableCell className="font-medium">{el.email}</TableCell>
                        <TableCell>{el.billing.first_name} {el.billing.last_name}</TableCell>
                        <TableCell className="text-right">{el.billing.phone}</TableCell>
                    </TableRow>
                ) }
            </TableBody>
        </Table>
      
    </div>
}