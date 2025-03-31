'use client'
import { useState } from 'react'
import Counter from '@/components/custom/counter'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { CommandItem, useCommand } from '@/contexts/command/CommandContext'
import { HopOff, LeafyGreen } from 'lucide-react'
import Image from 'next/image'
import ConfirmModal from '../confirm-modal'

export default function CommandList({
  commandItems
}: {
  commandItems: CommandItem[]
}) {
  const { updateQuantity, removeFromCommand, setOpenModal, openModal } =
    useCommand()
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  )

  const images = [
    'https://receitadaboa.com.br/wp-content/uploads/2024/04/bottom_view_caesar_salad_oval_plate_dark_red_table-23000869-1.jpg',
    'https://veganoporquesim.com.br/wp-content/uploads/2023/06/Risoto-de-Cogumelos.webp',
    'https://laticiniosbomdestino.com.br/2016/wp-content/uploads/2023/03/pizza-marguerita-com-mozzarella-de-bufala-bom-destino-scaled.jpg'
  ]

  const handleRemoveClick = (productId: number) => {
    setSelectedProductId(productId)
    setOpenModal(true)
  }

  const handleConfirmRemoval = () => {
    if (selectedProductId) {
      removeFromCommand(selectedProductId)
    }
    setOpenModal(false)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      <ConfirmModal
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        confirmButton={handleConfirmRemoval}
      />

      {commandItems.map((product: CommandItem) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-row h-32 transition-all duration-300 hover:shadow-lg"
        >
          {/* Imagem - Tamanho fixo à esquerda */}
          <div className="relative w-32 h-full flex-shrink-0">
            <Image
              src={images[product.id - 1]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 128px, 128px"
            />
          </div>

          {/* Conteúdo - Lado direito */}
          <div className="flex-1 p-3 flex flex-col min-w-0 h-full">
            <div className="flex justify-between items-start gap-2 mb-1">
              <h2 className="text-base font-semibold line-clamp-2 break-words">
                {product.name}
              </h2>
              <div className="flex gap-1 flex-shrink-0">
                {product.isVegan === 1 && (
                  <Badge
                    variant="outline"
                    className="bg-green-800 p-1 rounded-full"
                  >
                    <LeafyGreen className="h-3 w-3 text-white" />
                  </Badge>
                )}
                {product.isGlutenFree === 1 && (
                  <Badge
                    variant="outline"
                    className="bg-green-800 p-1 rounded-full"
                  >
                    <HopOff className="h-3 w-3 text-white" />
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-gray-600 text-xs mb-2 line-clamp-2 break-words">
              {product.description}
            </p>

            <div className="flex justify-between items-end mt-auto">
              <p className="text-base font-medium">
                R$ {product.price.toFixed(2)}
              </p>
              <Counter
                size="sm"
                quantity={product.quantity}
                setQuantity={(quantity: number) => {
                  updateQuantity(product.id, quantity)
                }}
                removeItem={() => handleRemoveClick(product.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
