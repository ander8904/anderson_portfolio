import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './nav.css'
export const Nav = () => {

  const [nav, setnav] = useState(true)

  const handlerNavbar = () => {
    setnav(!nav)
  }
  return (
    <div className='flex fixed opacity-75 z-10 top-0 left-0 right-0 justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-[rgb(38,63,115)]  text-white'>
      <h1 className='w-full text-3xl font-bold text-[#94E1F2] '>Anderson</h1>
      <ul className=' hidden md:flex'>
        <li className=' p-20 font-bold '>
          <a className='text-[#94E1F2]' href='./Nav'>Inicio</a>
        
          </li>
        <li className='p-20 font-bold text-[#94E1F2]'>Acerca</li>
        <li className='p-20 font-bold '>Proyectos</li>
        <li className=' p-20 font-bold text-[#94E1F2]'>Contacto</li>
    
        {/*<li className='p-20  btn-primary'>Cambiar idioma</li>*/}
      </ul>
      <div onClick={handlerNavbar} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20} />}
       
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[rgb(38,63,115)] ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#94E1F2] m-4'>Anderson</h1>

        <ul className='uppercase p-4 '>
          <li className='p-4 border-b border-gray-600 '>Inicio</li>
          <li className='p-4 border-b border-gray-600'>Acerca</li>
          <li className='p-4 border-b border-gray-600'>Proyectos</li>
          <li className='p-4 border-b border-gray-600'>Contacto</li>

        </ul>
      </div>

    </div>
  )
}
