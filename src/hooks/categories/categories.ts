'use client'


import GetCategories from "@/services/categories/getCategories";
import { ICategories } from "@/types/categories/categoriesResponse";
import { useEffect, useState } from "react";
import transformCategories from "./transform";

interface IUseProducts {
  categories: ICategories[];
  isLoadingCategories: boolean;
  error: string | null;
}

export default function useCategories(): IUseProducts {
  const [categories, setCategoreis] = useState<ICategories[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCategories = async () => {
    setIsLoadingCategories(true);
    const response = await GetCategories();
    if(!response) {
      setError('Sem resposta')
      return
    } else if (response.result) {
      console.log('res', response)
      setCategoreis(transformCategories(response.result))
      setIsLoadingCategories(false)
    } else if(response.msg) {
      console.log('msg', response.msg)
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, isLoadingCategories, error };
}