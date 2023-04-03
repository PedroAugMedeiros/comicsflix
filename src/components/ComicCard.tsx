import { useState } from 'react'
import { ComicSelected } from '../interfaces';

interface ComicCardProps {
    thumbnail: string;
    title: string;
    path: string;
    creators: {
      items:  [{
      name: string,
    }];
  }
  stories: {
    items:  [{
    name: string,
  }];
}
    description: string;
    setShowDetails: (value: boolean) => void;
    setActualDetails: (value: ComicSelected) => void;
    id: number;
    isOrderCompletion: boolean;
}


export default function ComicCard(props: ComicCardProps) {
    const [onHover, setOnHover] = useState(false)
    const [onHoverDetails, setOnHoverDetails] = useState(false)
    const notExistImg = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"

 


    const { setShowDetails, setActualDetails, creators, description, stories, thumbnail, title, path, id, isOrderCompletion  } = props;

    function handleClick(isShowDetails: boolean) {
      if(!isOrderCompletion) {
        setShowDetails(isShowDetails)
        setActualDetails({
          thumbnail: thumbnail,
          title: title,
          creators: creators,
          stories: stories,
          description: description,
          id: 0
        })
      }
    }
    

    function handleOver(isHover: boolean) {
      if(!isOrderCompletion) {
        setOnHover(isHover)
      }
    }

    if(path ===  notExistImg) {
      return (
        <div onMouseOver={() => handleOver(true)} onMouseOut={() => handleOver(false)}  className={`flex flex-col w-[14%]  rounded-md h-72 mb-5 ${onHover ? 'z-10 border-white transition-transform duration-1000 ease-out scale-110 w-[16%] delay-100' : 'z-0 transition-transform duration-1000 ease-out scale-100 delay-100'}`}>
      <div  className='flex flex-col justify-center rounded-md bg-[#E62429]  imgDefault rounded-b-none h-72'>
        <div className='flex  flex-row bg-[#BD1023] text-[#FFFFFF] h-[30%] text-center justify-center items-center '><h1 className='mx-2 text-sm font-semibold font-dmsans'>{title}</h1></div>
        </div>
        {onHover && <div className='flex flex-col bg-[#BD1023] rounded-b-md text-center justify-center items-center'> 
          <button onClick={() => handleClick(true)} onMouseOver={() => setOnHoverDetails(true)} onMouseOut={() => setOnHoverDetails(false)} className={`bg-[#191919] p-1 w-[80%]  font-semibold font-dmsans  rounded-md m-2 ${onHoverDetails ? 'text-[#BD1023]' : 'text-white'}`}>Detalhes</button>
        </div>}
        </div>
        )
    }

  return (
     <div onMouseOver={() => handleOver(true)} onMouseOut={() => handleOver(false)} id={String(id)} className={`flex flex-col w-[14%] rounded-md h-72 mb-5 ${onHover ? 'z-10 border-white transition-transform duration-1000 ease-out scale-110 w-[17%] delay-100' : 'z-0 transition-transform duration-1000 ease-out scale-100 delay-100'}`}>
            <img className={`${onHover && 'rounded-b-none'} h-72 rounded-md `} src={thumbnail}>
            </img>
            {onHover && <div className='flex flex-col bg-[#BD1023]  rounded-b-md text-center justify-center items-center'> 
              <h1 className='text-[#FFFFFF] m-2 font-semibold text-base font-dmsans'>{title}</h1>
              <button onClick={() => handleClick(true)} onMouseOver={() => setOnHoverDetails(true)} onMouseOut={() => setOnHoverDetails(false)} className={`bg-[#191919] p-1 w-[80%]  font-semibold font-dmsans  rounded-md m-2 ${onHoverDetails ? 'text-[#BD1023]' : 'text-white'}`}>Detalhes</button>
            </div>}
     </div>
  )
}
