import { CommandItem } from '@/contexts/command/CommandContext'
import { IOrderRequest, IOrderRequestDTO } from '@/types/order/orderRequest'
import { IOrderResponse, IOrderResponseDTO } from '@/types/order/orderResponse'

export const transformOrderRequest = (
  orders: IOrderRequest[]
): IOrderRequestDTO[] => {
  return orders.map((order: IOrderRequest) => ({
    comanda: order.table,
    idProduto: order.productId,
    observacao: order.observation
  }))
}

export const transformOrderResponse = (
  response: IOrderResponseDTO
): IOrderResponse => {
  return {
    message: response.msg,
    status: response.status
  }
}

export const returnArrayOfOrders = (
  products: CommandItem[]
): IOrderRequest[] => {
  return products.flatMap(
    ({ quantity, ...product }: CommandItem, index: number): IOrderRequest[] =>
      Array.from({ length: quantity }, () => ({
        table: 1,
        productId: product.id,
        observation: product.observations?.[index] ?? ''
      }))
  )
}
