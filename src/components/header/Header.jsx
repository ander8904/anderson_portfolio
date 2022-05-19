import React from 'react'
import './header.css'
import Spline from '@splinetool/react-spline';
import { CVA } from './CVA'

import { Nav } from './nav/Nav'
import { Contact } from '../contact/Contact';
import { Experience } from '../experience/Experience';
import { Footer } from '../footer/Footer';

export const Header = () => {
  return (

    <div className='relative bg-slate-800 overflow-hidden '>
      <Nav/>
      <div class=" max-w-7xl mx-auto p-4 md:mt-44  ">
   
        <section class=" mt-96 mx-auto sm:mt-12 sm:px-6  lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl  ">
              <span class="block snap-x:inline">Bienvenido, mi nombre es</span>
              <span class="block text-indigo-600 xl:inline">Anderson Camacho Brenes</span>
              <h5 className='block text-light'>Junior developer</h5>
            </h1>

            <CVA />

          </div>

        </section>
      
        <div class="lg:absolute lg:inset-y-24 lg:right-0 overflow-auto">
        <Spline scene="https://draft.spline.design/pM4Yopvnvr57D0Ui/scene.splinecode" />
        </div>
 
    
      </div>
    
   
    
    </div>
  )
}



