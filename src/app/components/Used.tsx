'use client'


import { api } from '@/lib/api'
import { useEffect, useState } from 'react'

export async function countUsed() {
    const response = await api.get('/countused')
    const usedContacts = response.data
    return usedContacts
}

export function Used() {
    const number = countUsed()

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    // console.log('Used: ' + number)
    // return number
    return (
    <p className="text-lg"> Contatos efetuados: {isClient ? number: number}
    </p>
    )
}