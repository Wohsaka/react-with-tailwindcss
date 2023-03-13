import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Tendencies = () => {
  return (
    <div className='flex flex-col px-4 mt-2 h-screen w-full md:ml-36 lg:pl-16 lg:ml-64 lg:w-3/5'>
      <h1 className='text-xl font-medium text-gray mb-2'>Tendencias para ti</h1>
      <div className='flex py-2 items-center ease-in duration-300 hover:bg-even-darker-gray lg:w-3/4'>
        <div className='container flex-col mr-auto'>
          <h3 className='text-darker-gray font-medium text-sm'>
            Eventos - Tendencia
          </h3>
          <h2 className='text-gray font-bold text-base'>Mujeres</h2>
          <h3 className='text-darker-gray font-medium text-sm'>
            185 mil Tweets
          </h3>
        </div>
        <BsThreeDots
          color='rgb(214, 217, 219)'
          size={34}
          className='ease-in duration-300 rounded-full p-2 hover:bg-not-so-darker-blue'
        />
      </div>
      <div className='flex py-2 items-center ease-in duration-300 hover:bg-even-darker-gray lg:w-3/4'>
        <div className='container flex-col mr-auto'>
          <h3 className='text-darker-gray font-medium text-sm'>
            Tendecia en Venezuela
          </h3>
          <h2 className='text-gray font-bold text-base'>Omar Enrique</h2>
          <h3 className='text-darker-gray font-medium text-sm'>1.366 Tweets</h3>
        </div>
        <BsThreeDots
          color='rgb(214, 217, 219)'
          size={34}
          className='ease-in duration-300 rounded-full p-2 hover:bg-not-so-darker-blue'
        />
      </div>
      <div className='flex py-2 items-center ease-in duration-300 hover:bg-even-darker-gray lg:w-3/4'>
        <div className='container flex-col mr-auto'>
          <h3 className='text-darker-gray font-medium text-sm'>
            Tendecia en Venezuela
          </h3>
          <h2 className='text-gray font-bold text-base'>Movistar</h2>
          <h3 className='text-darker-gray font-medium text-sm'>6.534 Tweets</h3>
        </div>
        <BsThreeDots
          color='rgb(214, 217, 219)'
          size={34}
          className='ease-in duration-300 rounded-full p-2 hover:bg-not-so-darker-blue'
        />
      </div>
      <div className='flex py-2 items-center ease-in duration-300 hover:bg-even-darker-gray lg:w-3/4'>
        <div className='container flex-col mr-auto'>
          <h3 className='text-darker-gray font-medium text-sm'>
            Tendecia en Venezuela
          </h3>
          <h2 className='text-gray font-bold text-base'>PDVSA</h2>
          <h3 className='text-darker-gray font-medium text-sm'>7.770 Tweets</h3>
        </div>
        <BsThreeDots
          color='rgb(214, 217, 219)'
          size={34}
          className='ease-in duration-300 rounded-full p-2 hover:bg-not-so-darker-blue'
        />
      </div>
      <div className='flex py-2 items-center ease-in duration-300 hover:bg-even-darker-gray lg:w-3/4'>
        <div className='container flex-col mr-auto'>
          <h3 className='text-darker-gray font-medium text-sm'>
            Tendecia en Venezuela
          </h3>
          <h2 className='text-gray font-bold text-base'>Apure</h2>
          <h3 className='text-darker-gray font-medium text-sm'>6.439 Tweets</h3>
        </div>
        <BsThreeDots
          color='rgb(214, 217, 219)'
          size={34}
          className='ease-in duration-300 rounded-full p-2 hover:bg-not-so-darker-blue'
        />
      </div>
      <div className='container py-4 ease-in duration-300 hover:bg-even-darker-gray lg:w-3/4'>
        <h3 className='text-blue font-medium text-sm'>Mostrar más</h3>
      </div>
    </div>
  )
}

export default Tendencies
