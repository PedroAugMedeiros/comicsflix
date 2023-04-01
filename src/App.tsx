import './App.css';
import Home from './components/Home';
import Header from './components/Header';
// import ComicDetailsCard from './components/ComicDetailsCard';
import { useState } from 'react';
import { ComicSelected } from './interfaces';
import ComicDetailsCard from './components/ComicDetailsCard';


function App() {
  const [showDetails, setShowDetails] = useState(false)
  const [actualDetails, setActualDetails] = useState<ComicSelected>()

  return showDetails ? <ComicDetailsCard 
   setShowDetails={setShowDetails}
  title={actualDetails?.title} stories={actualDetails?.stories} description={actualDetails?.description} thumbnail={actualDetails?.thumbnail} creators={actualDetails?.creators} /> :  <div className="App bg-[#1E1E1E] h-[210vh]"><Header /><Home setActualDetails={setActualDetails} setShowDetails={setShowDetails}/></div>
}

export default App;
