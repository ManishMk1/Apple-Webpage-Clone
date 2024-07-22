import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'
import Model from './Components/Model'
function App() {
 

  return (
    <>
    <main className='bg-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Highlights></Highlights>
      <Model></Model>
    </main>
       
    </>
  )
}

export default App
