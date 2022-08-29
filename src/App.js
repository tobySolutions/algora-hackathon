import './App.css';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [meetingDetails, setMeetingDetails] = useState([])

  const onMeetingStart = (task) => {
    console.log(meetingDetails)
    setMeetingDetails([{topic: task.topic, time: task.time}])
  }
  return (
    <div className=" bg-[#1E1E1E] ">
      <div className=''>
        <Navbar/>
        <Schedule Details={onMeetingStart}/>
      </div>
      <div className=' w-full bottom-0'><Footer onMeetingStart={onMeetingStart}/></div>
    </div>
  );
}

export default App;
