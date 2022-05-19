import React from 'react'
import { Spinner } from '../header/Spinner';
import './footer.css'

export const Footer = () => {
  return (
    <div className='flex items-center text-center  max-w-[1920px] max-h-24  bg-[rgb(38,63,115)]  text-white'>
    
    
        <div class="py-12 ml-24 mt-24 text-center text-2xl font-extrabold ...">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-600">
            Diseñado por: Anderson Camacho Brenes
          </span>
        </div>
        <div className='py-8 '>
          <Spinner />
        </div>
      </div>


 



  )
}
