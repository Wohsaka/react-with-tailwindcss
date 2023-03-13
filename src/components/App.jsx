import React from 'react'
import SearchBar from './SearchBar'
import VerticalBanner from './VerticalBanner'
import Footer from './Footer'
import Tendencies from './Tendencies'
import SignInBanner from './SignInBanner'
import './App.css'

function App() {
  return (
    <div className=''>
      <VerticalBanner />
      <SearchBar />
      <Tendencies />
      <SignInBanner />
      <Footer />
    </div>
  )
}

export default App
