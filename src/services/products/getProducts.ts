import { IDefaultResponse } from '@/types/default/defaultResponse'
import { IProdutosDTO } from '@/types/products/productsResponse'

export default async function GetProducts() {
  console.log('env', process.env)
  try {
    const headers = new Headers()

    const apiUrl = `http://localhost:8000/api/cardapio/produtos`

    console.log('apiUrl', apiUrl)

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
