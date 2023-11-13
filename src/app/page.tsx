import { Remaining } from './components/Remaining'
import { Used } from './components/Used'
import { Button } from './components/Button'

export default function Home() {
  return (
    <div className="h-screen bg-zinc-900 text-zinc-50 flex flex-col gap-3 items-center justify-center  font-mono">
      <Button />
      <p className="text-sm">Contatos efetuados: {Used()}</p>
      <p className="text-sm">Contatos restantes: {Remaining()}</p>
    </div>
  )
}
