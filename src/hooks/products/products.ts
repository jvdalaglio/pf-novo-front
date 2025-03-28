'use client'

import GetProducts from "@/services/products/getProducts";
import { IProdutos } from "@/types/products/productsResponse";
import { useEffect, useState } from "react";
import transformProducts from "./transform";

interface IUseProducts {
  products: IProdutos[];
  isLoadingProducts: boolean;
  error: string | null;
  getProductsByCategory: (products: IProdutos[], categoryId: number) => IProdutos[];
}

export default function useProducts(): IUseProducts {
  const [products, setProducts] = useState<IProdutos[]>([]);
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

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isLoadingProducts, error, getProductsByCategory };
}