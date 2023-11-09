import React from 'react'
import {GiNotebook} from 'react-icons/gi'
import {BsPencil} from 'react-icons/bs'
const Header = () => {
  return (
    <div className='flex  pl-4 py-4 bg-sky-400'>
      <div className="flex flex-wrap gap-2 shadow-xl">
      <h1 className='font-poppins text-2xl font-bold 
        text-white'>To do lists</h1>
      <GiNotebook className='text-white h-8 text-xl' />
      <BsPencil className='text-white h-8 text-xl' />
      </div>
    </div>
  )
}

export default Header