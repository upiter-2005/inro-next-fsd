'use client'
/* eslint-disable @next/next/no-img-element */
import crypto from 'crypto'
import { utf8_to_b64 } from '../../helpers/decodes'

interface ILiqPayPay {
  amount: string
  currency: string
  description: string
  orderId: number
  title: string
  className?: string
  disabled: boolean
  extra?: React.ReactNode
}

export const LiqPayPay:React.FC<ILiqPayPay> = ({
  amount,
  currency,
  description = 'test',
  orderId = Math.floor(1 + Math.random() * 900000000),
  title = 'Payment',
  disabled,
  className,
  extra
}) => {

  const jsonString = {
    public_key: process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_TEST,
    version: '3',
    action: 'pay',
    amount: amount,
    currency: currency,
    description: description,
    order_id: orderId,
    result_url: process.env.NEXT_PUBLIC_THANK_PAGE
  }

  const private_key = process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_TEST
  const data = utf8_to_b64(JSON.stringify(jsonString))
  const signString = private_key + data + private_key
  const sha1 = crypto.createHash('sha1')
  sha1.update(signString)
  const signature = sha1.digest('base64')


  return (
    <form  method='POST' action='https://www.liqpay.ua/api/3/checkout' acceptCharset='utf-8' >
      <input type='hidden' name='data' value={data} />
      <input type='hidden' name='signature' value={signature} />
      {extra || (
        <button className="w-full bg-[#7ab72b] text-white px-2 py-3 rounded-[8px] mt-5 font-bold" disabled={disabled}>

          <span>Сплатити онлайн {amount} {currency}</span>
        </button>
      )}
    </form>
  )

}



