import {z} from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const passwordSchema = z.string().min(4, { message: 'Занадто короткий пароль' })

export const defaulFieldsSchema = z.object({
  first_name: z.string().min(3, {message: "Занадто коротке ім'я"}),
  last_name: z.string().min(3, {message: "Занадто коротке прізвище"}),
  tel: z.string().regex(phoneRegex, 'Перевірте коректність телефону'),
  email: z.string().email({ message: 'Введите корректную почту' }),

})

export const checkoutFieldsSchema = defaulFieldsSchema
  .merge(
    z.object({
      rc_first_name:  z.string().min(3, {message: "Занадто коротке ім'я"}).optional(),
      rc_last_name:  z.string().min(3, {message: "Занадто коротке прізвище"}).optional(),
      rc_tel: z.string().regex(phoneRegex, 'Перевірте коректність телефону').optional(),
      congrats_text: z.string().min(3, {message: "Занадто короткий текст"}).optional(),


      delivery: z.string(),
      type_np: z.string().optional(),
      np_city: z.string().min(3, {message: "Занадто коротко"}).optional(),
      np_department: z.string().min(3, {message: "Занадто коротко"}).optional(),

      showroom_type: z.string().optional(),


      in_country: z.string().min(3, {message: "Занадто коротко"}).optional(),
      in_city: z.string().min(3, {message: "Занадто коротко"}).optional(),
      in_adress: z.string().min(3, {message: "Занадто коротко"}).optional(),
      in_zip: z.string().min(3, {message: "Занадто коротко"}).optional(),

      payment: z.string(),
      packing: z.string().array().optional(),
      message: z.string().min(3, {message: "Занадто коротке повідомлення"}).optional().or(z.literal('')),
    })
  )


  export const formRegisterSchema = defaulFieldsSchema
  .merge(
    z.object({
      password: passwordSchema,
      confirmPassword: passwordSchema,
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });


  export type TDefauldFields = z.infer<typeof defaulFieldsSchema>
  export type TCheckoutFields = z.infer<typeof checkoutFieldsSchema>
  export type TFormRegisterSchema = z.infer<typeof formRegisterSchema>

