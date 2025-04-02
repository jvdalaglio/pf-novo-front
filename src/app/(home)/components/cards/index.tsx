import { Badge } from '@/components/ui/badge'
import { IProduto } from '@/types/products/productsResponse'
import { HopOff, LeafyGreen } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Cards({ products }: { products: IProduto[] }) {
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {products.map((product: IProduto) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-row h-32 transition-all duration-300 hover:shadow-lg"
          onClick={() => router.push(`/produto/${product.id}`)}
        >
          {/* Imagem - Tamanho fixo à esquerda */}
          <div className="relative w-32 h-full flex-shrink-0">
            {' '}
            {/* Largura fixa de 8rem (128px) */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 128px, 128px"
              priority
            />
          </div>

          {/* Conteúdo - Lado direito com overflow controlado */}
          <div className="flex-1 p-3 flex flex-col min-w-0 h-full">
            {/* Cabeçalho com título que quebra linha */}
            <div className="flex justify-between items-start gap-2 mb-1">
              <h2 className="text-base font-semibold line-clamp-2 break-words">
                {' '}
                {/* Permite quebra de linha */}
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

            {/* Descrição */}
            <p className="text-gray-600 text-xs mb-2 line-clamp-2 break-words">
              {product.description}
            </p>
            <p className="text-base font-medium mt-auto">
              R$ {product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
