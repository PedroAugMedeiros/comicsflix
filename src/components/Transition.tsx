import React from 'react'
import TransitionImage from '../images/marvelGifTransition-unscreen.gif'


export default function Transition() {

  return (
    <div className='flex absolute m-0 justify-center items-center h-[82vh]  bottom-100 w-[100%] bg-[#1E1E1E]'><img className='w-[15%] sm:w-[60%]' src={TransitionImage}/></div>
  )
}
