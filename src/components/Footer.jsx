import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue w-full px-6 py-4 fixed bottom-0 left-0 md:block'>
      <h1 className='text-white font-bold pb-2 text-xl md:text-2xl'>
        Twitter es mejor en la app
      </h1>
      <p className='text-white text-sm pb-4 md:text-base'>
        Nunca te pierdas un Tweet. Abre esto en la app de Twitter para obtener
        la experiencia completa.
      </p>
      <div className='flex justify-between'>
        <button className='border font-medium text-sm py-1 rounded-2xl border-white-bg-blue text-white px-4 md:text-base'>
          Ahora no
        </button>
        <button className='bg-white font-medium text-sm py-1 rounded-2xl px-6 md:text-base'>
          Cambiar a la app
        </button>
      </div>
    </div>
  )
}

export default Footer
