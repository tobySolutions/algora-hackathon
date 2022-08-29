import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from 'react-icons/md'


const Schedule = ({Details}) => {
    const [tasks, setTasks] = useState([1])
    const [taskInfo, setTaskInfo] = useState('')
    const [time, setTime] = useState(0)

    useEffect(() => {
        Details({
            topic: taskInfo,
            time
        })
    },[taskInfo, time])

    const prev = () => {
        return(
            <div className='w-[25px] mr-[20px] h-[25px] bg-[#242736] rounded-sm'>
                <button><MdOutlineArrowBackIosNew color='#EEEEF0'/></button>
            </div>
        )
    }
    const next = () => {
        return(
            <div className='w-[25px] ml-[20px] h-[25px] bg-[#0E78F9] grid place-item-center rounded-sm'>
                <button><MdOutlineArrowForwardIos color='#EEEEF0'/></button>
            </div>
        )
    }
    const AddTask = () => {
        setTasks([Math.random(), ...tasks])
    }
    const removeTask = (id) => {
        const newArr = tasks.filter(task => task !== id)
        setTasks(newArr)
    }
  return (
    <div className='flex flex-col md:flex-row mx-auto sm:mx-0 justify-between pt-[50px] bg-[#1E1E1E] pb-16'>
        <div className=' flex ml-4 flex-col md:flex-row gap-6'>
            <div>
                <div className='mb-[10px]'>
                    <p className='text-[#3A3D4A] font-rubik'>Schedule new meeting</p>
                </div>
                <div className='max-w-[320px] sm:max-w-xl'>
                    <Calendar prevLabel={prev()} nextLabel={next()} prev2Label={null} next2Label={null} tileClassName='text-white hover:bg-[#0E78F9] rounded-md px-0 w-0.5 mr-2 mt-1 bg-[#3A3D4A]' className='text-white list-none rounded-md px-0 mr-2 mt-1 '/>
                </div>
            </div>
            <div className='mx-auto sm:mx-0'>
                <div>
                    <div className='mb-[40px]'>
                        <p className='text-[#3A3D4A] font-rubik mb-[10px]'>Meeting ID</p>
                        <p className='bg-[#242736] w-24 px-5 py-1 text-[#EEEEF0] text-center rounded-md'>765141</p>
                    </div>
                </div>
                <div>
                    <div className='mb-[40px]'>
                        <p className='text-[#3A3D4A] font-rubik mb-[10px]'>Meeting ID</p>
                        <div className='flex gap-[8px]'><p className='bg-[#242736] w-24 px-5 py-1 text-[#EEEEF0] text-center rounded-md'>765141</p>
                        <p className='bg-[#00FF57] text-[#EEEEF0] w-24 py-1 rounded-md text-center'>copy link</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mb-[40px]'>
                        <p className='text-[#3A3D4A] font-rubik mb-[10px]'>Select Time</p>
                        <p className='bg-[#242736] w-24 px-5 py-1 text-[#EEEEF0] text-center rounded-md'>765141</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='mr-[25px]'>
            <div onClick={AddTask} className='flex justify-end'><div className='bg-[#00FF57] h-[40px] w-[40px] rounded-full flex items-center justify-center mb-[30px]'>
                <button className='text-xl font-bold text-[#EEEEF0]'>
                    +
                </button>
            </div>
            </div>
            <div>{tasks.map(task => {
                console.log(taskInfo)
                return (
                    <div key={task} className='flex gap-[10px] ml-6 mb-8'>
                <div onClick={() => removeTask(task)} className='bg-[#242736] w-[30px] h-[30px] rounded-full flex justify-center items-center'>
                    <button className='text-[#EEEEF0] text-xl'>-</button>
                </div>
                <div className='w-[140px] bg-[#1E1E1E]  sm:ml-0 border-2 border-[#242736] rounded-lg flex items-center justify-center'>
                    <input type="text" onChange={(e) => setTaskInfo(e.target.value)} value={taskInfo} className='w-[80px] p-[5px] outline-none bg-[#1E1E1E] text-[#EEEEF0]' placeholder='Title' />
                    <input type="number" onChange={(e) => setTime(e.target.value)} value={time} className='w-[50px] pl-[5px] outline-none text-[#EEEEF0] bg-[#242736]' placeholder='mins' />
                </div>

            </div>
                )
            })}</div>
            

        </div>

    </div>
  )
}

export default Schedule