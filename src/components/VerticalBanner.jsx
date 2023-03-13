import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { SlMagnifier } from 'react-icons/sl'
import { FaCog, FaHashtag } from 'react-icons/fa'

const VerticalBanner = () => {
  return (
    <div className='hidden absolute border-r-darker-gray border-r flex-col container w-fit px-8 ml-8 h-full md:flex lg:w-1/5'>
      <div className='py-2'>
        <BsTwitter
          color='rgb(214, 217, 219)'
          size={36}
          className=' ease-in duration-300 hover:bg-darker-blue cursor-pointer p-1 rounded-2xl'
        />
      </div>
      <div className='py-4 ease-in duration-300  hover:bg-darker-gray rounded-full cursor-pointer lg:pl-2 lg:flex lg:center lg:align-middle'>
        <FaHashtag
          color='rgb(214, 217, 219)'
          size={26}
          className='hidden lg:inline'
        />
        <span className='hidden text-gray font-bold text-xl pl-4 lg:inline'>
          Explorar
        </span>
        <SlMagnifier
          color='rgb(214, 217, 219)'
          size={26}
          className='lg:hidden'
        />
      </div>
      <div className='py-4 ease-in duration-300  hover:bg-darker-gray rounded-full cursor-pointer lg:pl-2 lg:flex'>
        <FaCog color='rgb(214, 217, 219)' size={26} className='lg:inline' />
        <span className='hidden text-gray text-xl  pl-4 lg:inline'>
          Configuración
        </span>
      </div>
    </div>
  )
}

export default VerticalBanner
