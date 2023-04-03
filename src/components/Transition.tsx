import React from 'react'
import TransitionImage from '../images/marvelGifTransition-unscreen.gif'


export default function Transition() {

  return (
    <div className='flex absolute m-0 justify-center items-center h-[75%] w-[100%]'><img className='w-[15%]' src={TransitionImage}/></div>
  )
}
