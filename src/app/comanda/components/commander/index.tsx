'use client'
import { useCommand } from '@/contexts/command/CommandContext'

export default function Commander() {
  const { totalPrice } = useCommand()
  return (
    <div className="flex flex-col gap-2 m-2">
      <span className="text-xl font-semibold">
        Total: R$ {totalPrice.toFixed(2)}
      </span>
      <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg">
        Finalizar Pedido
      </button>
    </div>
  )
}
