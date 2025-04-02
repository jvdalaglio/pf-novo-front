'use client'
import Counter from '@/components/custom/counter'
import { Spinner } from '@/components/custom/loading-spinner'
import { Textarea } from '@/components/ui/textarea'
import { useCommand } from '@/contexts/command/CommandContext'
import useProducts from '@/hooks/products/useProducts'
import { ClipboardList } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CardDetailsProps {
  id: number
}

export default function CardDetails({ id }: CardDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [observations, setObservations] = useState('')
  const { addToCommand } = useCommand()
  const { getProductsById, product, isLoadingProducts } = useProducts()

  useEffect(() => {
    void getProductsById(id)
  }, [id])

  const handleAddToCommand = () => {
    if (!product) return
    addToCommand({
      id,
      name: product.name,
      price: product.price,
      observations: observations.trim() || undefined,
      quantity,
      isGlutenFree: product.isGlutenFree,
      isVegan: product.isVegan,
      description: product.description,
      image: product.image
    })

    setQuantity(1)
    setObservations('')
  }

  return (
    <>
      {isLoadingProducts || !product ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner size={'large'} />
        </div>
      ) : (
        <div className="pb-20">
          {/* Imagem do produto */}
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Detalhes do produto */}
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                {/* Espaço reservado para avaliação ou outros badges */}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Descrição</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Preço</h2>
              <p className="text-2xl font-bold mt-2">
                R$ {product.price?.toFixed(2)}
              </p>
            </div>

            {/* Seletor de quantidade */}
            <div className="mt-8 flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Quantidade</h2>
              <Counter
                size="md"
                quantity={quantity}
                setQuantity={setQuantity}
              />
            </div>

            <div className="flex flex-col gap-5">
              <Textarea
                placeholder="Observações: (Exemplo sem cebola)"
                value={observations}
                onChange={e => setObservations(e.target.value)}
                className="min-h-[100px]"
              />
              <button
                onClick={handleAddToCommand}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                disabled={isLoadingProducts}
              >
                <ClipboardList className="h-5 w-5" />
                {isLoadingProducts ? 'Processando...' : 'Adicionar à Comanda'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
