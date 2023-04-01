import React, { useEffect, useState } from 'react'
import { comicsApi2 } from '../services/api.js'
import { useApi } from '../hooks/useApi'
import ComicCard from './ComicCard';
import Pagination from './Pagination';

interface HomeProps {
  setShowDetails: (value: boolean) => void;
  setActualDetails: (value: any) => void;
}



export default function Home(props: HomeProps) {
  const { setShowDetails, setActualDetails } = props;
  const [startPokemon, setStartPokemon] = useState(0)
  const [limit, setLimit] = useState(18)

  const setPerson = new Set();
 
    const { getComics, comics } = useApi(comicsApi2)

 

    useEffect(() => {
        getComics()
        renderComics()
      }, [startPokemon, limit]) 

      function renderComics() {
        const filterComics = comics?.filter((person) => {
          const duplicatedPerson = setPerson.has(person.title);
          setPerson.add(person.title);
          return !duplicatedPerson;
        });

          return filterComics?.map((comic, index) => {  
            if (index >= startPokemon && index < limit) {
              return <ComicCard key={comic.id} id={comic.id} setActualDetails={setActualDetails} description={comic.description} creators={comic.creators} stories={comic.stories}  setShowDetails={setShowDetails} path={comic.thumbnail.path} thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension} title={comic.title}  /> 
              }
            }    
          )
      }   



  return (
    <><div className='flex flex-row flex-wrap gap-5 gap-y-10  justify-center w-[100%] bg-[#1E1E1E] py-10'>
      {renderComics()}
    </div><div>
        <Pagination
          startPokemon={startPokemon}
          setStartPokemon={setStartPokemon}
          setLimit={setLimit}
          limit={limit}
          // setIsLoading={setIsLoading}
          data-testid='pagination' /></div>
          </>

  )
}
