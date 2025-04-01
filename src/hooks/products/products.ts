'use client'

import GetProductsById from "@/services/products/getProductById";
import GetProducts from "@/services/products/getProducts";
import { IProdutos } from "@/types/products/productsResponse";
import { useEffect, useState } from "react";
import { tranformProduct, transformProducts } from "./transform";

interface IUseProducts {
  products: IProdutos[];
  product: IProdutos | null;
  isLoadingProducts: boolean;
  error: string | null;
  getProductsByCategory: (products: IProdutos[], categoryId: number) => IProdutos[];
  getProductsById: (productId: number) => Promise<void>;
}

export default function useProducts(): IUseProducts {
  const [products, setProducts] = useState<IProdutos[]>([]);
  const [product, setProduct] = useState<IProdutos | null>(null);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async () => {
    setIsLoadingProducts(true);
    const response = await GetProducts();
    if(!response) {
      setError('Sem resposta')
      return
    } else if (response.result) {
      setProducts(transformProducts(response.result));
      setIsLoadingProducts(false)
    } else if(response.msg) {
      console.log('msg', response.msg)
    }
  }

  const getProductsByCategory = (products: IProdutos[], categoryId: number): IProdutos[] => {
    return products.filter(product => product.category === categoryId);
  }

  const getProductsById = async (id: number): Promise<void> => {
    setIsLoadingProducts(true);
    const response = await GetProductsById({id})
    if(!response) {
      setError('Sem resposta')
    } else if (response.result) {
      setProduct(tranformProduct(response.result[0]))
      setIsLoadingProducts(false)
    } else if(response.msg) {
      console.log('msg', response.msg)
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isLoadingProducts, error, getProductsByCategory, getProductsById, product };
}