import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Schedule from '../components/Schedule'

const First = () => {
  return (
    <div className=" bg-[#1E1E1E] ">
      <div className=''>
        <Navbar/>
        <Schedule />
      </div>
      <div className=' w-full bottom-0'><Footer /></div>
    </div>
  )
}

export default First