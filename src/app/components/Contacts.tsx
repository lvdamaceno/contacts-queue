import { api } from '@/lib/api'

export async function Contacts(){
  const response = await api.get('/contacts')
  const registerId: string = response.data
  const registerContact = await api.get('/contacts/' + registerId)
  const contact: string = registerContact.data
  // console.log(contact)
  
  const update = await api.put('/contacts/' + registerId, {"isUsed": "1"})
  update.data.json; 
  return `${contact}`

}



