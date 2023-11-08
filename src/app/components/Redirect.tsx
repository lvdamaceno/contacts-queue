import { api } from '@/lib/api'

export async function Redirect() {
    const whatsapp_link = "https://api.whatsapp.com/send?phone=55"
    const message = "&text=%F0%9F%8E%89%20Ol%C3%A1,%20cliente%20da%20Casa%20Contente!%20%F0%9F%8F%A0%F0%9F%92%96%0A%0AA%20%F0%9F%96%A4%20Black%20Friday%20%F0%9F%96%A4%20j%C3%A1%20chegou%20por%20aqui%20e%20n%C3%B3s%20estamos%20super%20empolgados%20para%20ver%20voc%C3%AA%20aproveitando%20as%20nossas%20ofertas%20imperd%C3%ADveis!%20%F0%9F%9B%8D%EF%B8%8F%E2%9C%A8%0A%0AE%20tem%20mais...%20Ao%20fazer%20suas%20compras,%20voc%C3%AA%20concorre%20automaticamente%20ao%20nosso%20%F0%9F%8E%81%20sorteio%20de%20100.000%20reais%20em%20pr%C3%AAmios!%20%F0%9F%A4%91%F0%9F%A5%B3%20que%20ocorrer%C3%A1%20no%20dia%20%F0%9F%97%93%EF%B8%8F23%20de%20dezembro.%0A%0AN%C3%A3o%20fique%20de%20fora%20dessa!%20Estamos%20te%20esperando!%20%F0%9F%8F%83%F0%9F%92%A8"
    
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
