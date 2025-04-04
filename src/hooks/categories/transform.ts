import {
  ICategories,
  ICategoriesDTO
} from '@/types/categories/categoriesResponse'

export default function transformCategories(
  categories: ICategoriesDTO[]
): ICategories[] {
  return categories.map(
    (category: ICategoriesDTO): ICategories => ({
      id: category.id_categoria,
      name: category.descricao
    })
  )
}
