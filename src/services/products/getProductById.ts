import { IDefaultResponse } from '@/types/default/defaultResponse'
import { IProdutosDTO } from '@/types/products/productsResponse'
import { environment } from '../../../environments'

export default async function GetProductsById({id}: {id: number}): Promise<IDefaultResponse<IProdutosDTO[]> | null> {
  try {
    const headers = new Headers()

    const apiUrl = `${environment.apiUrl}/produtos/${id}`

    const requestOptions: RequestInit = {
      method: 'GET',
      headers,
      redirect: 'follow',
      cache: 'no-cache'
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: IDefaultResponse<IProdutosDTO[]> = await data.json()

    return jsonData
  } catch (e) {
    console.error(`Error: ${JSON.stringify(e)}`)
    return null
  }
}
