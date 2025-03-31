import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'

interface CounterProps {
  quantity: number
  setQuantity: (quantity: number) => void
  size: 'sm' | 'md' | 'lg'
}

export default function Counter({ quantity, setQuantity, size }: CounterProps) {
  const decrement = () => {
    setQuantity(Math.max(1, quantity - 1))
  }

  const increment = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className={cn(
          'p-2 rounded-full bg-gray-100 hover:bg-gray-200',
          size === 'sm' ? 'p-1' : size === 'md' ? 'p-2' : 'p-3'
        )}
        aria-label="Reduzir quantidade"
      >
        <Minus
          className={cn(
            'h-4 w-4',
            size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'
          )}
        />
      </button>
      <span
        className={cn(
          size === 'sm' ? 'text-md' : size === 'md' ? 'text-lg' : 'text-xl'
        )}
      >
        {quantity}
      </span>
      <button
        onClick={increment}
        className={cn(
          'p-2 rounded-full bg-gray-100 hover:bg-gray-200',
          size === 'sm' ? 'p-1' : size === 'md' ? 'p-2' : 'p-3'
        )}
        aria-label="Aumentar quantidade"
      >
        <Plus
          className={cn(
            'h-4 w-4',
            size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'
          )}
        />
      </button>
    </div>
  )
}
