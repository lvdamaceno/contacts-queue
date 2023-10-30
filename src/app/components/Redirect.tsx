import { api } from '@/lib/api'

export async function Redirect() {
    const whatsapp_link = "https://api.whatsapp.com/send?phone=55"
    const message = "&text=%F0%9F%8F%A1%E2%9C%A8%20Ol%C3%A1,%20cliente%20Contente!%20Prepare-se%20para%20o%20C%C3%ADrio%20de%20Nazar%C3%A9%20com%20a%20Casa%20Contente!%20%F0%9F%8C%9F%0A%0AMobiliar%20para%20esta%20festa%20de%20f%C3%A9%20e%20renova%C3%A7%C3%A3o%20nunca%20foi%20t%C3%A3o%20f%C3%A1cil.%20Explore%20nossas%20op%C3%A7%C3%B5es%20encantadoras.%20E%20h%C3%A1%20mais:%20este%20ano,%20celebramos%2010%20anos%20da%20Casa%20Contente%20com%20um%20sorteio%20incr%C3%ADvel%20de%20100.000%20em%20pr%C3%AAmios!%20%F0%9F%A5%B3%F0%9F%8E%81%0A%0AN%C3%A3o%20perca!%20Promo%C3%A7%C3%A3o%20v%C3%A1lida%20at%C3%A9%20o%20final%20do%20ano.%20Visite-nos%20hoje%20mesmo!%20%F0%9F%91%89%F0%9F%9B%8B%EF%B8%8F%F0%9F%8E%89"
    
    const response = await api.get('/contacts')
    const registerId = response.data
    const registerContact = await api.get('/contacts/' + registerId)
    const contact = registerContact.data

    const url = whatsapp_link + contact + message

    const update = await api.put('/contacts/' + registerId, {"isUsed": "1"})
    update.data.json; 

    window.open(url, "_self")
}