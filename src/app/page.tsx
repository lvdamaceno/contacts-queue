import Link from 'next/link'
import {Message} from './components/Message'

export default async function Home() {
  const contactLink: string = await Message()
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex items-center justify-center">
      {/* <a 
      href={contactLink}
      // rel="noopener noreferrer"
      className=" text-xl font-mono rounded-xl p-5 bg-red-600 hover:bg-red-500">
        Inicie uma conversa
      </a> */}
      
      <Link href={contactLink} replace>
        Inicie uma conversa
      </Link>

    </div>
  )
}
