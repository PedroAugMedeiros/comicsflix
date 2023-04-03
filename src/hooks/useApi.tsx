import Axios from 'axios';
import { useState, useEffect, useCallback } from "react";
import { Comic } from '../interfaces/index'

export function useApi(url: string) {

  const [comics, setComics] = useState<Comic[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getComics = useCallback(() => {
    Axios.get(url)
      .then(response => {
        setComics(response.data.data.results)
      })
      .finally(() => setIsLoading(false));
    }, [setComics, url]);

  useEffect(() => {
    getComics();
  }, [getComics])
  
  return {comics, getComics, isLoading}
}
