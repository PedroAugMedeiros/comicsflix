import React, { useEffect, useState } from 'react'
import { comicsApi2 } from '../services/api.js'
import { useApi } from '../hooks/useApi'
import ComicCard from './ComicCard';
import Pagination from './Pagination';
import { ComicSelected } from '../interfaces/index.js';
import Transition from './Transition';
import SearchArea from './SearchArea';

interface HomeProps {
  setShowDetails: (value: boolean) => void;
  setIsOrderCompletion: (value: boolean) => void;
  setActualDetails: (value: ComicSelected) => void;
  isOrderCompletion: boolean;
  selectedAdress: string;
  actualDetails: ComicSelected | undefined;
}



export default function Home(props: HomeProps) {
  const { setShowDetails, selectedAdress, setActualDetails, isOrderCompletion, actualDetails, setIsOrderCompletion } = props;
  const [startPokemon, setStartPokemon] = useState(0)
  const [limit, setLimit] = useState(18)
  const [isSearching, setIsSearching] = useState(false)
  const [searchContent, setSearchContent] = useState('')

  const setPerson = new Set();
 
    const { getComics, comics, isLoading } = useApi(comicsApi2)

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

        let correctComics;
         if(isSearching) {
          correctComics = filterComics?.filter((comic) =>  comic.title.toLowerCase().includes(searchContent.toLowerCase()))
         } else {
          correctComics = filterComics;
         }
          return correctComics?.map((comic, index) => {  
            if (index >= startPokemon && index < limit) {
              return <ComicCard isOrderCompletion={isOrderCompletion} key={comic.id} id={comic.id} setActualDetails={setActualDetails} description={comic.description} creators={comic.creators} stories={comic.stories}  setShowDetails={setShowDetails} path={comic.thumbnail.path} thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension} title={comic.title}  /> 
              }
            }    
          )
      }       

  return (
    <>
    <SearchArea setIsSearching={setIsSearching} setSearchContent={setSearchContent} />
        {isOrderCompletion && <div className='flex z-40  absolute p-5 align-center left-[20%] right-[20%] top-40 font-semibold items-center justify-center p-5 rounded-md flex-col absolute mx-10  bg-[#BD1023] text-3xl'>
        <h1 className='text-4xl'>Congratulations,</h1>
        <p className='text-3xl'>your comic:</p>
        <p className='text-white'>{actualDetails?.title}</p> 
       <p className='text-3xl'>will be sent to:</p> 
        <p className='text-white'>{selectedAdress}</p>
        <button onClick={() => setIsOrderCompletion(false)} className='bg-white rounded-md mt-2 p-2 hover:text-[#BD1023] hover:scale-110 w-[80%]'>OK</button>
        </div>}
        {isLoading ? <Transition /> : <div className={`flex flex-row ${isOrderCompletion ? 'opacity-10' : ''} flex-wrap gap-5 gap-y-10  justify-center w-[100%] bg-[#1E1E1E] py-10`}>
      {renderComics()}
  
    </div>}
    <div>
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
