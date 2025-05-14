'use client';

import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

type Item = {
    name: string;
    price: number;
  };
  interface IDownloadButton {
    orders: any[]
  }

  interface IOrderItem {
    id: string,
    date_created: string,
    email: string,
    name: string
  }

export const DownloadButton:React.FC<IDownloadButton> = ({orders}) => {

    const [items, setItems] = useState<IOrderItem[]>([]);

    // Здесь можно заменить на своё API
    useEffect(() => {
      // Пример данных
      const exampleItems = [
        { name: 'Apple', price: 1.2 },
        { name: 'Banana', price: 0.8 },
        { name: 'Orange', price: 1.5 },
      ];
      
      
      const exelArray: IOrderItem[] = orders.map(el => {
      return  {
            id: el.id,
            name: `${el.billing.first_name} ${el.billing.last_name}`,
            email: el.billing.email,
            date_created: el.date_created
        }
      })
      console.log(exelArray)
      setItems(exelArray);
    }, [orders]);
  
    const handleExportExcel = () => {
      const worksheet = XLSX.utils.json_to_sheet(items);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Items');
  
      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
  
      const blob = new Blob([excelBuffer], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
  
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `items_${new Date().toISOString()}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };



    return <button 
                onClick={handleExportExcel}
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-[auto] my-5 block'
            >Скачати emails в Excel</button>
}