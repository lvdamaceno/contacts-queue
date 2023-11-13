'use client'

import Link from "next/link";
import { Redirect } from "./Redirect";
import { useState, useEffect } from 'react'

export function Button() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Link href={""} rel="noopener noreferrer" onClick={Redirect}>
        <p className=" text-xl rounded-xl p-5 bg-red-600 hover:bg-red-500 cursor-pointer">
          {isClient ? 'Inicie uma conversa' : 'Inicie uma conversa'}
        </p>
    </Link>
  )
  
}