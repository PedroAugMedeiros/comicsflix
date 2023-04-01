import { ReactNode } from 'react';
import { Comic } from '../interfaces/index';

export type ComicsContextProps = {
  children: ReactNode;
}

export type ComicsContextType = {
  Comics: Comic[],
//   showDetails: boolean;
//   Comicselected: Comic;
//   searchInput: string;
//   typeFilter: string;
  setComics: (newState: Comic[]) => void;
//   setShowDetails: (newState: boolean) => void;
//   setComicselected: (newState: Comic) => void;
//   setSearchInput: (newState: string) => void;
//   setTypeFilter: (newState: string) => void;
}