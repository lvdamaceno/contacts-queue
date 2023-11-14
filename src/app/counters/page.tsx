import { Remaining } from '../components/Remaining'
import { Used } from '../components/Used'

export default function Home() {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex flex-col gap-3 items-center justify-center font-mono">
    <Remaining/>
    <Used/>
    </div>
  )
}