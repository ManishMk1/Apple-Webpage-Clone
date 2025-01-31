import React from 'react'
import {navLists} from '../constants'
import {appleImg, bagImg, searchImg} from '../utils'
function Navbar() {
  return (
   <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
    <nav className='flex w-full screen-max-width  hover:text'>
        <img src={appleImg} alt="" width={14} height={18} />
        <div className='flex justify-center flex-1 max-sm:hidden'>
        {navLists.map((nav,i)=>(
            <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                {nav}
            </div>
        ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt="search Image" width={18} height={18} />
            <img src={bagImg} alt="bag Image" width={18} height={18} />
        </div>
        
    </nav>
   </header>
  )
}

export default Navbar