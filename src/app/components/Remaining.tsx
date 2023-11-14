import { api } from '@/lib/api'

export async function countRemaining() {
    const response = await api.get('/remaining')
    const remainingContacts = response.data
    return remainingContacts
}

export function Remaining() {
    const number = countRemaining()
    // console.log('Remaining: ' + number)
    // return number
    return (
    <p className="text-lg">Contatos disponíveis: {number}</p>
    )
}