import { Metadata } from "next"

import about1 from "@/shared/assets/images/about1.jpeg"
import about2 from "@/shared/assets/images/about2.jpeg"
import about3 from "@/shared/assets/images/about3.jpeg"
import about4 from "@/shared/assets/images/about4.jpeg"

import { LeftImgContent } from "@/shared/ui/page/leftImgContent"
import { RightImgContent } from "@/shared/ui/page/rightImgContent"
import { ShopList } from "@/shared/ui/page/shopList"
import { Gem, Leaf, Shield, Sparkle } from "lucide-react"
import { BreadcrumbsInro } from "@/shared/ui/breadcrumbsInro"

export const metadata: Metadata = {
  title: "Inro - Контакти",
  description: "Inro - Контакти",
}

export async function AboutPage () {
  return (
    <>
    <BreadcrumbsInro
      current="Про бренд"
    />

      <div className="max-w-[1200px] m-auto py-16 px-4">
        <RightImgContent
          title="INRO – маленька деталь, яка може розповісти багато про що…"
          img={about1}
        >
            <p>У японській культурі – це маленька коробочка для зберігання дрібниць. У давнину, в японськомуодязі не було кишень, тож їх заміняли спеціальні коробочки, які підвішувалися до пояса. Так ось,спочатку, інро було призначено для зберігання чогось дуже важливого для свого власника,особливого та дорогого. Тому, в їх виробництві використовували найцінніше: ексклюзивнийрозпис, рідкісні породи дерева, слонову кістку та дорогоцінне каміння. З часом, коробочки інроперетворилися на справжні витвори мистецтва.</p>
        </RightImgContent>
        <LeftImgContent
          title="Ці принципи ми заклали в основу бренду INRO"
          img={about2}
        >
          <p>Ми довго працювали над формулами продуктів і знайшли ідеальні поєднання  чистих та натуральних інгредієнтів з високоефективними сучасними компонентами, які  мають чудовий вплив на здоров’я нашої шкіри і при виробництві яких не завдається шкода  природі. В основі наших продуктів ми заклали концепцію Clean Beauty,  основними принципами якої є безпека та висока ефективність, адже кожна  жінка безумовно прекрасна та унікальна і наше завдання просто підкреслити цю красу, допомогти їй засяяти на повну силу та подарувати  позитивну емоцію.</p>
          <p>Лінійки нішев их ароматів складає особливий предмет нашої гордості,  оскільки вони були розроблені у співпраці з найкращими парфумерами з  Франції, Італії та Іспанії. Пристрасть до ольфакторного мистецтва, увага  до деталей та прагнення до створення кращих продуктів не залишали нас  протягом усього проекту, тому ми особисто відвідали всі фабрики, на яких  виготовляються наші аромати.</p>
        </LeftImgContent>

        <h3 className="text-4xl leading-9 mb-6">Наші основні пріоритети:</h3>
        <div className="flex flex-wrap flex-col md:flex-row justify-around md:justify-between mb-[160px]">
          <div className="flex gap-4"><Leaf /> Натуральність</div>
          <div className="flex gap-4"><Shield /> Безпека</div>
          <div className="flex gap-4"><Sparkle /> Ефективність</div>
          <div className="flex gap-4"><Gem /> Ексклюзивність</div>
        </div>

        <RightImgContent
          title="Кожен засіб INRO – це результат роботи косметологів, технологів та парфумерів"
          img={about3}
        >
            <p>Саме завдяки такому ретельному опрацюванню та збалансованості рецептур,  серії наших продуктів дозволяють не тільки розслабитися, насолодитися  приємними ароматами та пережити ексклюзивний ольфакторний досвід, але й  чудово тонізують та очищують шкіру, роблять її здоровішою, а активні  компоненти, екстракти та ферментований мед, що входять до складу  продуків, запускають процеси регенерації та детоксикації.</p>
        </RightImgContent>
        <LeftImgContent
          title="Це дивно, але, досить часто, щастя людини полягає в дуже простих речах"
          img={about4}
        >
          <p>
            Саме тому, ми вибрали своєю місією створення продуктів, здатних  підкреслити і додати нові грані сприйняття простих, але дуже важливих  для нас речей: здоров’я, відпочинку, особистого простору, нашого  будинку, спілкування з друзями та близькими.
          </p>
          <p className="font-bold">  INRO – це цілий світ. Світ ароматів, вражень, очікувань, спогадів, можливостей та емоцій.</p>
          <p>Ласкаво просимо!Ласкаво просимо!</p>
        </LeftImgContent>

        <h3 className="text-4xl leading-9 mb-9">Контакти магазинів:</h3>
        <ShopList description={false} />

      </div>

    </>
  )
}