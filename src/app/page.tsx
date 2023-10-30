'use client'

import Link from 'next/link'
import {Redirect} from './components/Redirect'

export default function Home() {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex items-center justify-center">
      <Link href={"/"} rel="noopener noreferrer" onClick={Redirect}>
        <p className=" text-xl font-mono rounded-xl p-5 bg-red-600 hover:bg-red-500 cursor-pointer">
          Inicie uma conversa
        </p>
      </Link>
    </div>
  )
}
