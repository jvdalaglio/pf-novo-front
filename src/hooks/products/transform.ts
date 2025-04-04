import { IProduto, IProdutoDTO } from '@/types/products/productsResponse'

export function transformProducts(products: IProdutoDTO[]): IProduto[] {
  return products.map(
    (product: IProdutoDTO): IProduto => tranformProduct(product)
  )
}

export function tranformProduct(product: IProdutoDTO): IProduto {
  return {
    id: product.id_produto,
    name: product.nome,
    description: product.descricao,
    image: product.imagem,
    price: product.preco,
    isVegan: product.eh_vegano,
    isGlutenFree: product.eh_sem_gluten,
    category: product.id_categoria,
    portions: product.porcoes
  }
}
