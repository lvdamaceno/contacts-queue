import { api } from '@/lib/api'

export async function Remaining() {
    const response = await api.get('/remaining')
    const responseData = response.data
    return <p className="text-sm">Contatos restantes: {responseData}</p>
}