import Axios from 'axios';
import { useState, useContext, useEffect, useCallback } from "react";
import { ComicsContext } from '../context/ComicsContext';
import { Comic } from '../interfaces/index'

export function useApi(url: string) {

  const [comics, setComics] = useState<Comic[]>()
  const [location, setLocation] = useState()
  const [error, setError] = useState<Error | null>(null)

  const getComics = useCallback(() => {
    Axios.get(url)
      .then(response => {
        setComics(response.data.data.results)
        // setImage(response.data)
        // setType(response.data.types.map((el: any) => el.type.name))
      })
      .catch(err => {
        setError(err);
      })
    }, [setComics, url]);

    const getLocation = useCallback(() => {
      Axios.get(url)
        .then(response => {
          setLocation(response.data)
          // setImage(response.data)
          // setType(response.data.types.map((el: any) => el.type.name))
        })
        .catch(err => {
          setError(err);
        })
      }, [setLocation, url]);
 

  // const mainType = type.shift()

  useEffect(() => {
    getComics();
  }, [getComics])
  
  return {comics, getComics, getLocation, location}
  // return { image, mainType, pokemon, error, isLoading, setIsLoading, getComics }
}
