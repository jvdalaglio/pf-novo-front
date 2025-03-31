import { ICategoriesDTO } from '@/types/categories/categoriesResponse'
import { IDefaultResponse } from '@/types/default/defaultResponse'

export default async function GetCategories() {
  try {
    const headers = new Headers()

    const apiUrl = `http://192.168.19.15:8001/api/cardapio/categorias`

    console.log('apiUrl', apiUrl)

    const requestOptions: RequestInit = {
      method: 'GET',
      headers,
      redirect: 'follow',
      cache: 'no-cache'
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: IDefaultResponse<ICategoriesDTO[]> = await data.json()

    return jsonData
  } catch (e) {
    console.error(`Error: ${JSON.stringify(e)}`)
    return null
  }
}
