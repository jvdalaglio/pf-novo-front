'use client'
import { Spinner } from '@/components/custom/loading-spinner'
import useCategories from '@/hooks/categories/categories'
import useProducts from '@/hooks/products/products'
import Cards from './components/cards'
import Categories from './components/categories'

export default function Home() {
  const { products, getProductsByCategory, isLoadingProducts } = useProducts()
  const { categories } = useCategories()
  return (
    <>
      <Categories categories={categories} />
      <div className="px-4">
        {!isLoadingProducts && products.length > 0 ? (
          categories.map((category, index) => (
            <div key={category.id}>
              <h2 className="text-xl font-bold mt-6 px-2 text-red-400 underline underline-offset-2">
                {category.name}
              </h2>
              <Cards products={getProductsByCategory(products, category.id)} />
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center items-center">
            <Spinner className="absolute top-1/2" size={'large'}></Spinner>
          </div>
        )}
      </div>
    </>
  )
}
