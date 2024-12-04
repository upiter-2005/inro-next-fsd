/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from "@/shared/helpers"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/form/input"
import Link from "next/link"

import { CallBackForm } from "@/features/callbackForm"
import { HrcForm } from "@/features/hrcForm"

interface IHorecaForm {
  className?: string
}

export const HorecaForm: React.FC<IHorecaForm> = ({ className }) => {

  return (
    <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-between items-center m-auto rounded-[8px] overflow-hidden my-14 md:my-40 gap-6">

      <div className="flex-1  md:px-6">
        <p className="text-3xl md:text-4xl font-thin text-left leading-8 md:leading-9 mb-6 ">Залишились питання або <br /> потрібна консультація?</p>
        <div className="text-xl  text-left font-thin leading-6 max-w-[399px]">Зв’яжіться з нами за номером <br />  <a href="tel+380930109455" className="font-bold">093 010 94 55</a> або напишіть нам <br /> на електрону пошту: <a href="mailto:inrohoreca@ukr.net" className="font-bold">inrohoreca@ukr.net</a> 
        </div>
      </div>

      <div className="md:w-[668px] py-10 px-6 bg-mramor text-white text-left flex flex-col rounded-[8px]">
          <HrcForm />
      </div>
    </div>

  )
}