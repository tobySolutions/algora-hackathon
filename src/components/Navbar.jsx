import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-[#1C1F2E] flex justify-between '>
        <div className='flex items-center gap-[5px] sm:gap-[10px] cursor-pointer'>
            <div className=' ml-[10px] sm:ml-[20px] shadow-lg'>
                <img src={Logo} alt='google meet logo ' className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]'/>
            </div>
            <div>
                <p className='text-[#5D6164] font-rubik'>Google meet</p>
            </div>
        </div>
        <div className='sm:flex hidden items-center'>
            <p className='text-[#EEEEF0] text-xl font-semibold font-Rubik'>Progress on quarterly goals</p>
        </div>
        <div className='flex items-center gap-[10px] mr-4 md:mr-[40px]'>
            <div className='bg-[#242736] rounded-lg'>
                <button className='text-white text-sm px-[10px] py-[6px] sm:text-base sm:px-[20px] sm:py-[8px]'>Cancel</button>
            </div>
            <div className='bg-[#0E78F9] rounded-lg'>
                <button className='text-white text-sm px-[10px] py-[6px] sm:text-base sm:px-[20px] sm:py-[8px]'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar