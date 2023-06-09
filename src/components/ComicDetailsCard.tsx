import React, { useState } from 'react'
import BackIcon from '../images/Daco_752371.png'
import Delivery from './Delivery';


interface ComicDetailsCardProps {
    title: string | undefined;
    description: string | undefined;
    thumbnail: string | undefined;
    creators: { items: [{ name: string; }]; } | undefined
    stories: { items: [{ name: string; }]; } | undefined
    setShowDetails: (value: boolean) => void;
    setIsOrderCompletion: (value: boolean) => void;
    setSelectedAdress: (value: string) => void;
}

export default function ComicDetailsCard(props: ComicDetailsCardProps) {
    const { thumbnail, title, creators, description, stories, setShowDetails, setIsOrderCompletion, setSelectedAdress } = props
    const [showDelivery, setShowDelivery] = useState(false)


    const notExistImg = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"

    const formatedDescription = description?.split('<br>')
    
    function renderCreators() {
      if(creators && creators.items.length > 0) {
      return creators?.items.map((creator, index) => 
          <div key={creator.name} className={`${index % 2 === 0 ? 'bg-[#E8E9EA]' : 'bg-[#E2E3E4]'}  p-2 px-6 text-lg font-sans`}>
            <p className='text-[#333]'>{index + 1}. {creator.name}</p>
          </div>
        )
      }
      return <h1 className='px-6 text-[#BD1023]'>{`(Not Found Creators)`}</h1>
   
    }

    function renderStories() {
      if(stories && stories.items.length > 0) {
      return stories?.items.map((storie, index) => 
      <div key={storie.name} className={`${index % 2 === 0 ? 'bg-[#E8E9EA]' : 'bg-[#E2E3E4]'}  p-2 px-6 text-lg font-sans`}>
      <p className='text-[#333]'>{index + 1}. {storie.name}</p>
    </div>
        )
      }
      return <h1 className='px-6 text-[#BD1023]'>Not Found Stories</h1>
   
    }

  if(thumbnail === notExistImg) {
    return    <div className='flex flex-row sm:flex-col   justify-center w-[100%]'>
    <div  className='flex flex-col gap-2 justify-center w-[50%] sm:w-[100%] items-center detailsComicImg z-0 perspectiva'>
            <button onClick={() => setShowDetails(false)} className='flex fixed top-0 left-1 w-[4%] m-2 p-1 px-3 bg-[#BD1023] rounded-full justify-center items-center sm:p-5'><img className='w-[100%] flex flex-col justify-center sm:w-[50%] sm:absolute' src={BackIcon} /></button>
            <div className='flex flex-col justify-center rounded-md  imgDefaultDetails text-center w-[50%] sm: h-[80%] sm:w-[70%] sm:pt-10 sm:pb-2 sm:h-[60vh] sm:mt-10'><div className='flex  flex-row bg-[#FFFFFF] h-[30%] sm:h-[40%] justify-center items-center px-2 p-5 '><h1 className='mx-2 text-3xl py-10 text-[#BD1023] sm:text-xl font-semibold font-dmsans'>{title}</h1></div></div>
            <button onClick={() => setShowDelivery(true)} className='bg-[#BD1023] text-white font-semibold rounded-md w-[50%] sm:w-[70%] p-4 sm:p-2 text-xl deliveryButton sm:mb-5'>SELECT DELIVERY LOCATION</button>
</div>
    <section className='flex flex-col bg-[#EDEEEF] overflow-y-auto w-[50%] sm:w-[100%] h-[100vh]'>
      <div className='flex flex-col bg-[#BD1023] items-center justify-center text-center gap-5 py-14 px-5'>
        <h1 className='uppercase text-4xl text-white font-semibold font-dmsans titleDetails sm:text-2xl'>{title}</h1>
        {formatedDescription ?      <p className='font-dmsans text-[#ECECEC] text-lg'> {formatedDescription[0]} </p> :  <p className=' font-dmsans text-[#ECECEC] text-lg'> Description Not Exist </p> }
      </div>
      <div className='flex flex-col bg-[#EDEEEF] gap-2'>
  <div className='text-lg px-4 p-3  font-medium '><h1>Creators</h1></div>
  <div className=''>{renderCreators()}</div>
  <div className='text-lg px-4 p-3 font-medium'><h1>Stories</h1></div>
  <div className=''>{renderStories()}</div>
  </div>
    </section>
    {showDelivery && <Delivery setSelectedAdress={setSelectedAdress} setIsOrderCompletion={setIsOrderCompletion} setIsShowDelivery={setShowDelivery} />}
      </div>
  }

  return (
    <div className='flex flex-row sm:flex-col   justify-center w-[100%] relative'>
<div  className={`flex ${showDelivery && 'opacity-30'} flex-col gap-2 justify-center w-[50%] sm:w-[100%] items-center detailsComicImg z-0 perspectiva sm:pb-5`}>
        <button onClick={() => setShowDetails(false)} className='flex fixed top-0 left-1 w-[4%] m-2 p-1 sm:p-5 px-3 bg-[#BD1023] rounded-full justify-center items-center md:p-8'><img className='w-[100%] flex flex-col justify-center sm:absolute sm:w-[50%] md:absolute md:w-[50%]' src={BackIcon} /></button>

    <img className='thumb opacity-100 w-[50%] sm:w-[70%] sm:pt-10 sm:pb-2 md:w-[80%]' src={thumbnail}/>
    <button onClick={() => setShowDelivery(true)} className='bg-[#BD1023] text-white font-semibold rounded-md w-[50%] sm:w-[70%] sm:p-2 s p-4 text-xl deliveryButton md:w-[80%] md:p-5'>SELECT DELIVERY LOCATION</button></div>
<section className={`flex flex-col bg-[#EDEEEF] overflow-y-auto w-[50%] sm:w-[100%] h-[100vh]  ${showDelivery && 'opacity-30'} `}>
  <div className='flex flex-col bg-[#BD1023] items-center justify-center text-center gap-5  py-14 sm:pt-2 px-10'>
    <h1 className='uppercase text-4xl text-white font-semibold titleDetails font-dmsans sm:text-2xl'>{title}</h1>
    {formatedDescription && formatedDescription[0] !== '' ?      <p className='font-sans text-[#ECECEC] text-lg'> {formatedDescription[0]} </p> :  <p className=' font-dmsans text-[#ECECEC] text-lg'> Description Not Exist </p> }
  </div>
  <div className='flex flex-col bg-[#EDEEEF] gap-2'>
  <div className='text-lg px-4 p-3 font-medium'><h1>Creators</h1></div>
  <div className=''>{renderCreators()}</div>
  <div className='text-lg px-4 p-3 font-medium'><h1>Stories</h1></div>
  <div className=''>{renderStories()}</div>
  </div>
</section>
{showDelivery && <Delivery setSelectedAdress={setSelectedAdress} setIsOrderCompletion={setIsOrderCompletion} setIsShowDelivery={setShowDelivery} />}
  </div>
  )
}
