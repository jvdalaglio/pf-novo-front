import { IProdutos, IProdutosDTO } from "@/types/products/productsResponse";

export default function transformProducts(products: IProdutosDTO[]): IProdutos[] {
  return products.map((product: IProdutosDTO): IProdutos => ({
    id: product.ID_PRODUTO,
    name: product.NOME,
    description: product.DESCRICAO,
    image: product.IMAGEM,
    price: product.PRECO,
    isVegan: product.EH_VEGANO,
    isGlutenFree: product.EH_SEM_GLUTEN,
    category: product.CATEGORIA,
    portions: product.PORCOES,
  }));
}