import React from 'react'
import CVF from '../../assets/Curriculum_Vitae__Anderson_.pdf'

export const CVA = () => {
  return (
    <div className='cta'>
        {/*<a href={CVF} download classname='btn'>Descargar Currículum</a>
        <a href='#contact' className='btn btn-primary'>Hablemos...</a>*/}
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href={CVF} download class="btn w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white  md:py-4 md:text-lg md:px-10"> Descargar Currículum </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3 ">
                  <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Hablemos... </a>
                </div>
              </div>
    </div>

    
  )
}
