import { CongratulationWords } from "@/features/formCheckout/ui/CongratulationWords"
import { Delivery } from "@/features/formCheckout/ui/delivery"
import { Message } from "@/features/formCheckout/ui/message"
import { Packing } from "@/features/formCheckout/ui/packing"
import { Payment } from "@/features/formCheckout/ui/payment"
import { PersonData } from "@/features/formCheckout/ui/personData"
import { RecipientData } from "@/features/formCheckout/ui/recipientData"
import { cn } from "@/shared/helpers"

export interface ICheckout {
  className?: string
}

export const Checkout: React.FC<ICheckout> = ({ className }) => {
  return (
    <div className={cn('max-w-[792px] w-full bg-[#fdfbf5] border border-solid border-[#E4E4E4] rounded-[8px]', className)}>
        <form>
          <PersonData />
          <RecipientData />
          <CongratulationWords />
          <Delivery />
          <Payment />
          <Packing />
          <Message />
        </form>
    </div>

  )
}