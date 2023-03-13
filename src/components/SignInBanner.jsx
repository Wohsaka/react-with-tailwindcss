import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'

const SignInBanner = () => {
  return (
    <div
      style={{ width: '30%' }}
      className='hidden container flex-col fixed right-0 top-0 border-l-darker-gray border-l pt-2 pr-8 pl-10 h-full lg:flex'
    >
      <div className='flex flex-col border border-darker-gray p-4 pr-8 rounded-xl'>
        <h1 className='font-bold text-xl text-gray'>¿Eres nuevo en Twitter?</h1>
        <p className='text-darker-gray text-xs'>
          Regístrate ahora para obtener tu propia cronología personalizada.
        </p>
        <div className='container flex flex-col'>
          <button className='bg-white text-black my-2 py-2 text-sm font-bold rounded-2xl easi-in duration-300 hover:bg-gray'>
            <FcGoogle size={22} className='inline mr-1' />
            Registrarse con Google
          </button>
          <button className='bg-white text-black my-2 py-2 text-sm font-bold rounded-2xl easi-in duration-300 hover:bg-gray'>
            <BsApple size={22} className='inline mr-1' />
            Registratse con Apple
          </button>
          <button className='bg-white text-black my-2 py-2 text-sm font-bold rounded-2xl easi-in duration-300 hover:bg-gray'>
            Crear cuenta
          </button>
        </div>
        <p className='text-darker-gray text-xs'>
          Al registrarte, aceptas los{' '}
          <a href='#' className='text-blue hover:underline'>
            Términos de servicio
          </a>{' '}
          y la{' '}
          <a href='#' className='text-blue hover:underline'>
            Política de privacidad
          </a>
          , incluida la política de{' '}
          <a href='#' className='text-blue hover:underline'>
            Uso de Cookies
          </a>
          .
        </p>
      </div>
      <nav className='container mt-2'>
        <span className='text-darker-gray text-sm mx-1 inline-block px-1 cursor-pointer hover:underline'>
          Condiciones de Servicio
        </span>
        <span className='text-darker-gray text-sm mx-1 inline-block px-1 cursor-pointer hover:underline'>
          Política de Privacidad
        </span>
        <span className='text-darker-gray text-sm mx-1 inline-block px-1 cursor-pointer hover:underline'>
          Política de cookies
        </span>
        <span className='text-darker-gray text-sm mx-1 inline-block px-1 cursor-pointer hover:underline'>
          Accesibilidad
        </span>
        <span className='text-darker-gray text-sm mx-1 inline-block px-1 cursor-pointer hover:underline'>
          Información de anuncios
        </span>
        <span className='text-darker-gray text-sm mx-1 inline-block px-1 cursor-pointer hover:underline'>
          Más opciones
        </span>
        <p className='text-sm px-1 text-darker-gray'>© 2023 Twitter, Inc</p>
      </nav>
    </div>
  )
}

export default SignInBanner
