import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Jobs from './Components/JobDiv/Jobs'
import Search from './Components/SearchDiv/Search'
import Footer from './Components/FooterDiv/Footer'
import Values from './Components/ValuesDiv/Values'

export const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
        <NavBar/>  
        <Search/> 
        <Jobs/>
        <Values/>
        <Footer/>
      </div>
  )
}

export default App 