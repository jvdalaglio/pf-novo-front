'use client'

import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'sonner'

export interface CommandItem {
  id: number
  name: string
  price: number
  quantity: number
  observations?: string
  isVegan?: number
  isGlutenFree?: number
  description: string
  image: string
}

interface CommandContextType {
  commandItems: CommandItem[]
  addToCommand: (item: CommandItem) => void
  updateQuantity: (id: number, newQuantity: number) => void
  removeFromCommand: (id: number) => void
  clearCommand: () => void
  totalItems: number
  totalPrice: number
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

const CommandContext = createContext<CommandContextType | undefined>(undefined)

export const CommandProvider = ({ children }: { children: ReactNode }) => {
  const [commandItems, setCommandItems] = useState<CommandItem[]>([])
  const [openModal, setOpenModal] = useState(false)
  const router = useRouter()

  const addToCommand = (item: CommandItem) => {
    setCommandItems(prevItems => {
      const existingItem = prevItems.find(
        commandItem => commandItem.id === item.id
      )

      if (existingItem) {
        // Se o item já existe, apenas atualiza a quantidade
        return prevItems.map(commandItem =>
          commandItem.id === item.id
            ? { ...commandItem, quantity: commandItem.quantity + item.quantity }
            : commandItem
        )
      }

      return [...prevItems, { ...item }]
    })
    router.push('/')
    showToastAddSuccess('Item adicionado à comanda com sucesso!')
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    setCommandItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    )
  }

  const removeFromCommand = (id: number) => {
    setCommandItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const clearCommand = () => {
    setCommandItems([])
  }

  const showToastAddSuccess = (message: string) => {
    toast.success(message, {
      position: 'top-center',
      style: {
        background: 'var(--color-red-500)',
        color: '#fff'
      },
      action: {
        label: 'Ver Comanda',
        onClick: () => router.push('/comanda'),
        actionButtonStyle: {
          color: '#fff'
        }
      }
    })
  }

  const totalItems = commandItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = commandItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CommandContext.Provider
      value={{
        commandItems,
        addToCommand,
        updateQuantity,
        removeFromCommand,
        clearCommand,
        totalItems,
        totalPrice,
        openModal,
        setOpenModal
      }}
    >
      {children}
    </CommandContext.Provider>
  )
}

export const useCommand = () => {
  const context = useContext(CommandContext)
  if (!context) {
    throw new Error('useCommand must be used within a CommandProvider')
  }
  return context
}
