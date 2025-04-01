import { IProdutos, IProdutosDTO } from "@/types/products/productsResponse";

export function transformProducts(products: IProdutosDTO[]): IProdutos[] {
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

export function tranformProduct(product: IProdutosDTO): IProdutos {
  return {
    id: product.ID_PRODUTO,
    name: product.NOME,
    description: product.DESCRICAO,
    image: product.IMAGEM,
    price: product.PRECO,
    isVegan: product.EH_VEGANO,
    isGlutenFree: product.EH_SEM_GLUTEN,
    category: product.CATEGORIA,
    portions: product.PORCOES,
  };
}