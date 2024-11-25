import { Metadata } from "next"

import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro"

export const metadata: Metadata = {
  title: "Inro - Оплата та доставка",
  description: "Inro - Оплата та доставка",
}

export async function OplataDostavka () {
  return (
    <>
      <BreadcrumbsInro
        current="Оплата та доставка"
      />
      <div className="max-w-[1200px] m-auto  md:py-16 px-4">
        
        <div className="text-xl leading-5 mb-16">
          <h2 className="text-2xl md:text-4xl leading-7 md:leading-9 mb-6 font-bold">Оплата</h2>
          <p><strong>Онлайн оплата — LiqPay</strong></p>
          <p>Здійсніть оплату просто та зручно під час оформлення замовлення! Використовуємо надійний платіжний сервіс LiqPay, який захищає ваші дані найсучаснішими сертифікатами безпеки.</p>

        

        </div>


        <div className="text-xl leading-5 mb-16">
          <h2 className="text-2xl md:text-4xl leading-7 md:leading-9 mb-6 font-bold">Доставка</h2>

          <p><strong>Доставка по Україні</strong></p>
          <p>Забезпечуємо швидку та надійну доставку Новою Поштою до найближчого відділення або прямо до ваших дверей — просто оберіть зручний для вас варіант під час оформлення.</p>

          <div><strong>Міжнародна доставка</strong></div>
          <p>Відправляємо замовлення по всьому світу «Укрпоштою»! Оформлюючи міжнародну доставку, ви отримуєте можливість обрати вигідний тариф та надійне відстеження посилки, куди б вона не прямувала.</p>


          <div><strong>Самовивіз з шоурумів</strong></div>
          <p>Замовляйте на сайті та отримуйте свою покупку особисто в наших шоурумах у Києві за адресами:</p>
          <ul>
            <li className="mb-5">
              <p className="mb-0"><strong>Комфорт Таун, вул. Юрія Липи, 6</strong> </p>
              <div>Графік роботи: Пн-Нд: 9:00 — 20:00</div>
            </li>
            <li className="mb-5">
              <p className="mb-0"><strong>вул. Бастіонна 5/13</strong> </p>
              <div>Графік роботи: Вт-Сб: 11:00 — 20:00</div>
            </li>
          </ul>


    <p>Запрошуємо завітати до наших шоурумів, де можна ознайомитися з продукцією INRO особисто та підібрати улюблені аромати в атмосфері натхнення та стилю.</p>


        </div>


      </div>

    </>
  )
}