import { IProduto, IProdutoDTO } from "@/types/products/productsResponse";

export function transformProducts(products: IProdutoDTO[]): IProduto[] {
  return products.map((product: IProdutoDTO): IProduto => ({
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

export function tranformProduct(product: IProdutoDTO): IProduto {
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