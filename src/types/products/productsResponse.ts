export interface IProdutosDTO {
  ID_PRODUTO: number;
  NOME: string;
  DESCRICAO: string;
  IMAGEM: string;
  PRECO: number;
  EH_VEGANO: number;
  EH_SEM_GLUTEN: number;
  CATEGORIA: number;
  PORCOES: boolean;
}

export interface IProdutos {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  isVegan: number;
  isGlutenFree: number;
  category: number;
  portions: boolean;
}