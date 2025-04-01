'use client'
import { useCommand } from '@/contexts/command/CommandContext'
import CommandList from './components/command-list'
import Commander from './components/commander'

export default function Comanda() {
  const { commandItems } = useCommand()
  return (
    <div className="px-4">
      {commandItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-2xl font-bold">Nenhum item adicionado</h1>
          <p className="text-gray-500">Adicione um item à comanda</p>
        </div>
      ) : (
        <>
          <Commander />
          <CommandList commandItems={commandItems} />
        </>
      )}
    </div>
  )
}
