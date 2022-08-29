import React from 'react'

const Footer = ({onMeetingStart}) => {
  return (
    <div onClick={() => onMeetingStart()} className='bg-[#1C1F2E] h-[92px] w-full grid place-items-center'>
      <div className='bg-[#0E78F9] rounded-2xl'>
        <button className='text-[#EEEEF0] sm:px-[70px] px-[20px] py-[6px] text-lg text-center w-full'>Start Meeting</button>
      </div>
    </div>
  )
}

export default Footer