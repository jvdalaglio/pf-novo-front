import { IOrderRequestDTO } from '@/types/order/orderRequest'
import { IOrderResponseDTO } from '@/types/order/orderResponse'

export default async function PostOrder(
  payload: IOrderRequestDTO[]
): Promise<IOrderResponseDTO | null> {
  try {
    const headers = new Headers()

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/pedido`

    const requestOptions: RequestInit = {
      method: 'POST',
      headers,
      redirect: 'follow',
      cache: 'no-cache',
      body: JSON.stringify(payload)
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: IOrderResponseDTO = await data.json()

    return jsonData
  } catch (e) {
    console.error(`Error: ${JSON.stringify(e)}`)
    return null
  }
}
