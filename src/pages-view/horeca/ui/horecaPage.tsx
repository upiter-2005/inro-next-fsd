import { Metadata } from "next"
import Image from "next/image"
import about1 from "@/shared/assets/images/about1.jpeg"
import about2 from "@/shared/assets/images/about2.jpeg"
import about3 from "@/shared/assets/images/about3.jpeg"
import about4 from "@/shared/assets/images/about4.jpeg"


import partner1 from "@/shared/assets/images/partner1.png"
import partner2 from "@/shared/assets/images/partner2.png"
import partner3 from "@/shared/assets/images/partner3.png"
import partner4 from "@/shared/assets/images/partner4.png"
import partner5 from "@/shared/assets/images/partner5.png"
import partner6 from "@/shared/assets/images/partner6.png"
import partner7 from "@/shared/assets/images/partner7.png"

import { LeftImgContent } from "@/shared/ui/page/leftImgContent"
import { RightImgContent } from "@/shared/ui/page/rightImgContent"
import { ShopList } from "@/shared/ui/page/shopList"
import { Gem, Leaf, Shield, Sparkle } from "lucide-react"

export const metadata: Metadata = {
  title: "Inro - Horeca",
  description: "Inro - Horeca",
}

export async function HorecaPage () {
  return (
    <>
      <div className="max-w-[1200px] m-auto py-16 px-4">
        <h1 className="text-4xl mb-20">Пропонуємо сервіс для вашого бізнесу</h1>

        <LeftImgContent
          img={about2}
        >
          <div>
          <p>Створення продуктової парфумованої лінійки для готелів, ресторанів, салонів краси, SPA-центрів, клінік, спортивних клубів, офісів та коворкінгів, магазинів одягу
          </p>
          <p>Пропонуємо парфумовані рідкі мила, лосьйони для рук, дифузори, свічки, саше, аромати для просторів, системи кріплень, підбір ароматів та створення унікального персоналізованого аромату </p>

          </div>

        </LeftImgContent>


        <RightImgContent
          title="За допомогою цього сервісу ви зможете:"
          img={about3}
        >
            <ul>
              <li className="mb-3">- Приємно здивувати ваших відвідувачів та запропонувати їм преміальний рівень сервісу</li>
              <li className="mb-3">- Покращити відвідуваність вашого закладу</li>
              <li className="mb-3">- Збільшити середній чек, адже гостям буде ще комфортніше і вони будуть залишатися в закладі довше</li>
              <li className="mb-3">- Збільшити кількість приємних спогадів відвідувачів і встановити з ними емоційний звʼязок</li>
              <li className="mb-3">- Підкреслити вашу унікальність, та збільшити впізнаваність серед інших аналогічних бізнесів</li>
            </ul>
        </RightImgContent>
        <LeftImgContent
          title="Переваги роботи з нами:"
          img={about4}
        >
          <ul>
              <li className="mb-3">- Преміальний та впізнаваний продукт, вироблений в Україні з безліччю гарних відгуків та визнанням провідних видань: VOGUE, ELLE, Cosmopolitan та інших</li>
              <li className="mb-3">- Нішеві аромати від кращих французьких та італійських постачальників</li>
              <li className="mb-3">- Широкий асортимент, що постійно оновлюється, відповідно до світових трендів</li>
              <li className="mb-3">- Зручне та комфортне для використання пакування</li>
              <li className="mb-3">- Стильні кріплення</li>
              <li className="mb-3">- Можливість розробки персоналізованого дизайну продукції з вашим брендуванням</li>
            </ul>
        </LeftImgContent>

        <h3 className="text-4xl leading-9 mb-6">З нами працюють</h3>
        <div className="flex gap-3 flex-wrap md:flex-row justify-between md:justify-between mb-[160px]">
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden ">
            <Image src={partner1} fill style={{objectFit: 'cover'}} alt="Inro partners"/>
          </div>
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden "><Image src={partner2} fill style={{objectFit: 'cover'}} alt="Inro partners"/></div>
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden "><Image src={partner3} fill style={{objectFit: 'cover'}} alt="Inro partners"/></div>
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden"><Image src={partner4} fill style={{objectFit: 'cover'}} alt="Inro partners"/></div>
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden"><Image src={partner5} fill style={{objectFit: 'cover'}} alt="Inro partners"/></div>
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden"><Image src={partner6} fill style={{objectFit: 'cover'}} alt="Inro partners"/></div>
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden"><Image src={partner7} fill style={{objectFit: 'cover'}} alt="Inro partners"/></div>
          <div className="bg-white relative flex w-[156px] h-[83px] md:w-[282px] md:h-[148px] rounded-[8px] overflow-hidden"><Image src={partner1} fill style={{objectFit: 'cover'}} alt="Inro partners"/></div>
        </div>

        <h3 className="text-4xl leading-9 mb-9">Контакти магазинів:</h3>


      </div>

    </>
  )
}