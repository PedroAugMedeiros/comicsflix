import { createContext, useState } from 'react';
import { ComicsContextType, ComicsContextProps } from '../types';
import { Comic } from '../interfaces/index';

const initialValue = {
  Comics: [],
  //   showDetails: false,
  //   Comicselected: {
  //     id: 0,
  //     url: ''
  //   },
  //   searchInput: '',
  //   typeFilter: '',
  setComics: () => {},
  //   setShowDetails: () => { },
  //   setComicselected: () => { },
  //   setSearchInput: () => { },
  //   setTypeFilter: () => { },
};

export const ComicsContext = createContext<ComicsContextType>(initialValue);

export const ComicsContextProvider = ({ children }: ComicsContextProps) => {
  const [Comics, setComics] = useState<Comic[]>(initialValue.Comics)
  //   const [showDetails, setShowDetails] = useState(initialValue.showDetails)
  //   const [Comicselected, setComicselected] = useState<ComicSelected>(initialValue.Comicselected)
  //   const [searchInput, setSearchInput] = useState(initialValue.searchInput)
  //   const [typeFilter, setTypeFilter] = useState(initialValue.typeFilter)

  const contextValue = {
    Comics, setComics,
    // typeFilter, setTypeFilter,
    // searchInput, setSearchInput, Comicselected, showDetails, setShowDetails, setComicselected
  }

  return (
    <ComicsContext.Provider value={contextValue}> {children}</ComicsContext.Provider>
  )
};