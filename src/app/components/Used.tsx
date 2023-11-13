import { api } from '@/lib/api'

export async function countUsed() {
    const response = await api.get('/countused')
    const usedContacts = response.data
    return usedContacts
}

export function Used() {
    const number = countUsed()
    // console.log('Used: ' + number)
    return number
}