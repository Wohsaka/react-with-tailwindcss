import React from 'react'
import { BsTwitter, BsThreeDots } from 'react-icons/bs'
import { SlMagnifier } from 'react-icons/sl'
import { FaCog } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='mx-auto py-3 flex justify-evenly items-center border-b-darker-gray bordermd:p md:border-0 md:justify-center md:ml-12 lg:w-1/2 lg:ml-64'>
      {/* Twitter Logo */}
      <div className='md:hidden'>
        <BsTwitter color='rgb(214, 217, 219)' size={26} />
      </div>
      {/* Search input and logo */}
      <div className='container flex bg-even-darker-gray rounded-2xl py-1 justify-evenly w-2/3 items-center md:mr-auto md:ml-24 md:w-3/4 md:py-2 md:justify-start'>
        <SlMagnifier color='rgb(214, 217, 219)' size={18} className='md:ml-4' />
        <input
          type='text'
          placeholder='Buscar en Twitter'
          className='w-2/3 bg-even-darker-gray md:mr-2 md:w-full md:ml-8'
        />
      </div>
      {/* Options icon */}
      <div className='md:ml-8'>
        <BsThreeDots
          color='rgb(214, 217, 219)'
          size={22}
          className='md:hidden'
        />
        <FaCog
          color='rgb(214, 217, 219)'
          size={36}
          className='hidden ease-in duration-300 rounded-full p-2 cursor-pointer hover:bg-darker-gray md:block'
        />
      </div>
    </div>
  )
}

export default SearchBar
