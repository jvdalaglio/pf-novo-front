'use client'
import Counter from '@/components/custom/counter'
import { Textarea } from '@/components/ui/textarea'
import { useCommand } from '@/contexts/command/CommandContext'
import { ClipboardList } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface CardDetailsProps {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  isVegan: number
  isGlutenFree: number
}

export default function CardDetails({
  id,
  name,
  description,
  price,
  imageUrl,
  isGlutenFree,
  isVegan
}: CardDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [observations, setObservations] = useState('')
  const { addToCommand } = useCommand()

  const handleAddToCommand = () => {
    addToCommand({
      id,
      name,
      price,
      observations: observations.trim() || undefined,
      quantity,
      isGlutenFree,
      isVegan,
      description
    })

    setQuantity(1)
    setObservations('')
  }

  return (
    <div className="pb-20">
      {/* Imagem do produto */}
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Detalhes do produto */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full"></div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Descrição</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Preço</h2>
          <p className="text-2xl font-bold mt-2">R$ {price.toFixed(2)}</p>
        </div>

        {/* Seletor de quantidade */}
        <div className="mt-8 flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Quantidade</h2>
          <Counter size="md" quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className="flex flex-col gap-5">
          <Textarea
            placeholder="Observações: (Exemplo sem cebola)"
            value={observations}
            onChange={e => setObservations(e.target.value)}
          />
          <button
            onClick={handleAddToCommand}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <ClipboardList className="h-5 w-5" />
            Adicionar à Comanda
          </button>
        </div>
      </div>
    </div>
  )
}
