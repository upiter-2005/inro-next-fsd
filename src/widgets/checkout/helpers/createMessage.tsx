export const createMessage = (data: any) => {
  let message = "";
    if(data.first_name) message += `Ім'я: ${data.first_name} \n`
    if(data.last_name) message += `Прізвище: ${data.last_name} \n`
    if(data.tel) message += `Телефон: ${data.tel} \n`
    if(data.email) message += `Пошта: ${data.email} \n`
    if(data.rc_first_name) message += `Ім'я отримувача: ${data.rc_first_name} \n`
    if(data.rc_last_name) message += `Прізвище отримувача: ${data.rc_last_name} \n`
    if(data.rc_tel) message += `Телефон отримувача: ${data.rc_tel} \n`
    if(data.congrats_text) message += `Текст листівки: ${data.congrats_text} \n`
    if(data.payment) message += `Спосіб оплати: ${data.payment} \n`
    if(data.delivery) message += `Спосіб доставки: ${data.delivery} \n`
    if(data.type_np) message += `Спосіб доставки Нова Пошта: ${data.type_np} \n`

    if(data.in_country) message += `Країна: ${data.in_country} \n`
    if(data.in_city) message += `Населений пункт: ${data.in_city} \n`
    if(data.in_adress) message += `Адреса: ${data.in_adress} \n`
    if(data.in_zip) message += `ZIP код: ${data.in_zip} \n`

    if(data.showroom_type) message += `Адреса самовивозу: ${data.showroom_type} \n`

    if(data.np_city) message += `Нова Пошта (місто): ${data.np_city} \n`
    if(data.np_department) message += `Нова Пошта (відділення): ${data.np_department} \n`


    if(data.packing) message += `Пакування: ${data.packing.join(", ")} \n`

    if(data.message) message += `Додаткова інформація: ${data.message} \n`


    window.gtag('set', 'user_data', {
      "email": [data.email],
      "phone_number": [data.tel],
      "address": [
        {
          first_name: data.first_name,
          last_name: data.last_name,
          street: data.in_adress || data.showroom_type,
          city: data.in_city || data.np_city,
          region: data.in_country,
          postal_code: data.in_zip || data.np_department
        }
      ]
    });

    
    return message
}