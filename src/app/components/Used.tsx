import { api } from '@/lib/api'
import ReactDOM from 'react-dom'

export async function countUsed() {
    const response = await api.get('/countused')
    const usedContacts = response.data
    return usedContacts
}

export function Used() {
    const number = countUsed()
    const usedContacts = number.then(value => value)
    return <p className="text-lg">Contatos efetuados: {usedContacts}</p>
}
