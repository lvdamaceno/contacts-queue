import { api } from '@/lib/api'

export async function Redirect() {
    const whatsapp_link = "https://api.whatsapp.com/send?phone=55"
    const message = "&text=%F0%9F%8E%89%F0%9F%8F%A0%20Transforme%20seu%20lar%20neste%20Natal%20com%20a%20Casa%20Contente!%20%F0%9F%8E%84%F0%9F%9B%8B%EF%B8%8F%20Aproveite%20m%C3%B3veis%20e%20eletrodom%C3%A9sticos%20incr%C3%ADveis%20e%20concorra%20a%20R$100.000%20em%20pr%C3%AAmios!%20%F0%9F%A4%91%F0%9F%8E%81%20Sorteio%20em%2023/12.%20N%C3%A3o%20perca!%20%F0%9F%8C%9F%F0%9F%8E%85%20%0AEntre%20em%20contato%20comigo%20para%20saber%20mais!%20"
    
    const response = await api.get('/contacts')
    const responseData = response.data
    const responseId = responseData[0].id
    const contactNumber = await api.get('/contacts/' + responseId)
    const contact = contactNumber.data

    const update = await api.put('/contacts/' + responseId, {"isUsed": "1"})
    update.data.json; 

    const url = whatsapp_link + contact + message

    window.open(url, "_self")
}
