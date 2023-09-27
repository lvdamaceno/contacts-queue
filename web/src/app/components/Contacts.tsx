import data from './Contacts.json'

export function Contacts(){

  const contacts = Object.values(data.contacts)
  const randomContact = contacts[parseInt(Math.random() * contacts.length)].number
  
  return randomContact
}