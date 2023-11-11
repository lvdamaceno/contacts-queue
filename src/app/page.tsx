'use client'

import Link from 'next/link'
import { Redirect } from './components/Redirect'
import { Remaining } from './components/Remaining'

export default function Home() {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex flex-col gap-3 items-center justify-center  font-mono">
      <Link href={"/"} rel="noopener noreferrer" onClick={Redirect}>
        <p className=" text-xl rounded-xl p-5 bg-red-600 hover:bg-red-500 cursor-pointer">
          Inicie uma conversa
        </p>
      </Link>
      <Remaining />
    </div>
  )
}
