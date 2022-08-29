import React from 'react';
import {useNavigate} from 'react-router-dom';

const Footer = () => {

  let navigate = useNavigate()
  const meetingStart = () => {
    navigate('/meeting')
  }
  return (
    <div onClick={() => meetingStart()} className='bg-[#1C1F2E] h-[92px] w-full grid place-items-center pt-8'>
      <div className='bg-[#0E78F9] rounded-2xl'>
        <button className='text-[#EEEEF0] sm:px-[70px] px-[20px] py-[6px] text-lg text-center w-full'>Start Meeting</button>
      </div>
    </div>
  )
}

export default Footer