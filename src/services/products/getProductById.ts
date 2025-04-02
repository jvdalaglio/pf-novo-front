import { IDefaultResponse } from '@/types/default/defaultResponse'
import { IProdutoDTO } from '@/types/products/productsResponse'

export default async function GetProductsById({id}: {id: number}): Promise<IDefaultResponse<IProdutoDTO[]> | null> {
  try {
    const headers = new Headers()

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/produtos/${id}`

    const requestOptions: RequestInit = {
      method: 'GET',
      headers,
      redirect: 'follow',
      cache: 'no-cache'
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: IDefaultResponse<IProdutoDTO[]> = await data.json()

    return jsonData
  } catch (e) {
    console.error(`Error: ${JSON.stringify(e)}`)
    return null
  }
}
