export interface IProdutoDTO {
  id_produto: number
  nome: string
  descricao: string
  imagem: string
  preco: number
  eh_vegano: number
  eh_sem_gluten: number
  id_categoria: number
  porcoes: boolean
}

export interface IProduto {
  id: number
  name: string
  description: string
  image: string
  price: number
  isVegan: number
  isGlutenFree: number
  category: number
  portions: boolean
}
