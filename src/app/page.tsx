import {Message} from './components/Message'

export default async function Home() {
  const contactLink = await Message()
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex items-center justify-center">
      <a 
      className="wpplink text-xl font-mono rounded-xl p-5 bg-red-600 hover:bg-red-500 cursor-pointer"
      href={contactLink}
      // rel="noopener noreferrer"
      >
        Inicie uma conversa
      </a>
    </div>
  )
}
