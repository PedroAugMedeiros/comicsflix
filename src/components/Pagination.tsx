import React, { useState } from 'react';

interface PaginationProps {
    startPokemon: number;
    limit: number;
    setStartPokemon: (arg0: number) => void;
    setLimit: (arg0: number) => void;
}

const Pagination = (
  props: PaginationProps) => {
    const { setStartPokemon, setLimit, limit, startPokemon } = props

  const [page, setPage] = useState(1)
  const lastPage = 6;

  const handleClick = (pageTarget: number, type: string) => {
    if(type === 'select') {
        if(pageTarget === 1) {
            setStartPokemon(0)
            setLimit(18)
            setPage(pageTarget)
        } else {
         setStartPokemon((pageTarget - 1) * 18)
         setLimit(pageTarget * 18)
         setPage(pageTarget)
        }
    }
    if (pageTarget < 1 && type === 'prev') {
    //   setNumberPage(1)
      setPage(1)
      setStartPokemon(0)
      setLimit(limit)
    } else if (pageTarget > lastPage && type === 'prox') {
    //   setNumberPage(lastPage)
      setPage(lastPage)
    } else if (type === 'prev') {
      setStartPokemon(startPokemon - 18)
      setLimit(limit - 18)
      setPage(pageTarget)
    } else if (type === 'prox') {
      setStartPokemon(startPokemon + 18)
      setLimit(limit + 18)
      setPage(pageTarget)
    }

  }

  return (
    <div
      data-testid='pagination'
      className="flex fixed z-20 bottom-0 bg-[#BD1023] w-full  flex-row   space-x-4 items-center text-white justify-center">
      <button
        className=''
        onClick={
          () => handleClick(page - 1, 'prev')}
      >
        <a href="#header">
          <h1>{`<`}</h1>
        </a>
      </button>
      <section className='flex'>
  <a href="#header">
  <button onClick={() => handleClick(1, 'select')} className={`${page === 1 ? 'bg-[#191919]' : 'bg-[#BD1023]' } p-2 px-4`}>1</button>
        </a>
        <a href="#header">
 <button onClick={() => handleClick(2, 'select')} className={`${page === 2 ? 'bg-[#191919]' : 'bg-[#BD1023]' } p-2 px-4`}>2</button>
 </a>
 <a href="#header">
 <button onClick={() => handleClick(3, 'select')} className={`${page === 3 ? 'bg-[#191919]' : 'bg-[#BD1023]' } p-2 px-4`}>3</button></a>
 <a href="#header">
 <button onClick={() => handleClick(4,'select')} className={`${page === 4? 'bg-[#191919]' : 'bg-[#BD1023]' } p-2 px-4`}>4</button></a>
 <a href="#header">
 <button onClick={() => handleClick(5,'select')} className={`${page === 5? 'bg-[#191919]' : 'bg-[#BD1023]' } p-2 px-4`}>5</button></a>
 <a href="#header">
 <button onClick={() => handleClick(6,'select')} className={`${page === 6? 'bg-[#191919]' : 'bg-[#BD1023]' } p-2 px-4`}>6</button></a>
      </section>

      <button
        className=''
        onClick={() => handleClick(page + 1, 'prox')}
      >
        <a href="#header">
          <h1>{`>`}</h1>
        </a>
      </button>
    </div>
  );
};

export default Pagination;