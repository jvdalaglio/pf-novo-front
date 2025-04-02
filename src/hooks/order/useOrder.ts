'use client'
import { CommandItem, useCommand } from '@/contexts/command/CommandContext'
import PostOrder from '@/services/order/postOrder'
import { IOrderResponseDTO } from '@/types/order/orderResponse'
import { useState } from 'react'
import {
  returnArrayOfOrders,
  transformOrderRequest,
  transformOrderResponse
} from './transform'

interface IUseOrder {
  postOrder: (order: CommandItem[]) => Promise<void>
  closeConfirmedModal: () => void
  isLoadingOrder: boolean
  orderConfirmed: OrderMessage
  modalIsOpen: boolean
}

export default function useOrder(): IUseOrder {
  const [isLoadingOrder, setIsLoadingOrder] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState<OrderMessage>(
    {} as OrderMessage
  )
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { clearCommand } = useCommand()

  const postOrder = async (order: CommandItem[]) => {
    setIsLoadingOrder(true)
    const ordersArray = returnArrayOfOrders(order)
    const transformedOrders = transformOrderRequest(ordersArray)
    const response = await PostOrder(transformedOrders)
    checkResponse(response)
  }

  const checkResponse = (response: IOrderResponseDTO | null) => {
    if (!response) {
      setOrderConfirmed({
        message: 'Erro ao realizar pedido. Tente novamente mais tarde.',
        status: 'error'
      })
    } else if (response) {
      const transformedResponse = transformOrderResponse(response)
      setOrderConfirmed(transformedResponse)
      response.status === 'success' && clearCommand()
    }
    setModalIsOpen(true)
    setIsLoadingOrder(false)
  }

  const closeConfirmedModal = () => {
    setModalIsOpen(false)
  }

  return {
    postOrder,
    isLoadingOrder,
    orderConfirmed,
    closeConfirmedModal,
    modalIsOpen
  }
}
