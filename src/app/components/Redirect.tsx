import { api } from '@/lib/api'

export async function Redirect() {
    const whatsapp_link = "https://api.whatsapp.com/send?phone=55"
    const message = "&text=%0AOl%C3%A1,%20como%20vai?%20%F0%9F%98%8A%20Sou%20o%20vendedor%20da%20Casa%20Contente!%20%F0%9F%8F%A0%20Estou%20aqui%20para%20lembrar%20voc%C3%AA%20de%20dar%20uma%20passadinha%20em%20nossa%20loja%20e%20conferir%20nossas%20novidades!%20%F0%9F%8C%9F%20Se%20precisar%20de%20ajuda%20para%20consultar%20algum%20produto,%20conte%20comigo!%20Estou%20%C3%A0%20disposi%C3%A7%C3%A3o.%20%F0%9F%91%8D"
    
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
