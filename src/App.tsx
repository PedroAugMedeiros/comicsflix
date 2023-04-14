import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { ComicSelected } from './interfaces';
import ComicDetailsCard from './components/ComicDetailsCard';


function App() {
  const [showDetails, setShowDetails] = useState(false)
  const [actualDetails, setActualDetails] = useState<ComicSelected>()
  const [isOrderCompletion ,setIsOrderCompletion] = useState(false)
  const [selectedAdress , setSelectedAdress] = useState('')

  useEffect(() => {
    if(isOrderCompletion) {
      setShowDetails(false)
    }
  }, [isOrderCompletion]) 

  return showDetails ? <ComicDetailsCard setSelectedAdress={setSelectedAdress} setIsOrderCompletion={setIsOrderCompletion} 
   setShowDetails={setShowDetails}
  title={actualDetails?.title} stories={actualDetails?.stories} description={actualDetails?.description} thumbnail={actualDetails?.thumbnail} creators={actualDetails?.creators} /> :  <div className="App bg-[#1E1E1E] h-[220vh]"><Header /><Home setIsOrderCompletion={setIsOrderCompletion} actualDetails={actualDetails} selectedAdress={selectedAdress} isOrderCompletion={isOrderCompletion} setActualDetails={setActualDetails} setShowDetails={setShowDetails}/></div>
}

export default App;
