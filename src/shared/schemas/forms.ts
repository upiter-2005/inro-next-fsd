import {z} from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const defaulFieldsSchema = z.object({
  fist_name: z.string().min(3, {message: "Занадто коротке ім'я"}),
  last_name: z.string().min(3, {message: "Занадто коротке прізвище"}),
  tel: z.string().regex(phoneRegex, 'Перевірте коректність телефону'),
  email: z.string().email({ message: 'Введите корректную почту' }),

})

export const checkoutFieldsSchema = defaulFieldsSchema
  .merge(
    z.object({
      rc_fist_name:  z.string().min(3, {message: "Занадто коротке ім'я"}).optional().or(z.literal('')),
      rc_last_name:  z.string().min(3, {message: "Занадто коротке прізвище"}).optional().or(z.literal('')),
      rc_tel: z.string().regex(phoneRegex, 'Перевірте коректність телефону').optional().or(z.literal('')),
      congrats_text: z.string().min(3, {message: "Занадто короткий текст"}).optional().or(z.literal('')),


      delivery: z.string(),
      payment: z.string(),
      //packing: z.string(),
      message: z.string().min(3, {message: "Занадто коротке повідомлення"}).optional().or(z.literal('')),
    })
  )


  export type TDefauldFields = z.infer<typeof defaulFieldsSchema>
  export type TCheckoutFields = z.infer<typeof checkoutFieldsSchema>

