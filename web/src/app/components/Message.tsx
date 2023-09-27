import {Contacts} from './Contacts'

export function Message(){
  const whatsapp_link = "https://api.whatsapp.com/send?phone=55"
  const contact = Contacts()
  const message = "&text=%F0%9F%8F%A1%F0%9F%8E%89%20A%20Casa%20Contente%20faz%2010%20anos%20e%20voc%C3%AA%20n%C3%A3o%20pode%20perder!%20Venha%20conferir%20as%20incr%C3%ADveis%20ofertas%20e%20participe%20da%20nossa%20promo%C3%A7%C3%A3o%20especial,%20que%20estar%C3%A1%20sorteando%20%F0%9F%92%B0%F0%9F%92%B0%20100.000%20em%20pr%C3%AAmios!%20%F0%9F%98%8D%0A%0AQuer%20saber%20mais?%20%F0%9F%91%87%20Fale%20comigo%20agora%20mesmo%20para%20aproveitar%20ao%20m%C3%A1ximo%20essa%20comemora%C3%A7%C3%A3o!%20%F0%9F%93%9E%F0%9F%93%A9"
  const link = whatsapp_link + contact + message
  return link
}