import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MeetingPage from './algora-hackathon-hackathon/src/components/pages/MeetingPage/MeetingPage';
import First from './pages/first-page';

function App() {
  const [meetingDetails, setMeetingDetails] = useState([])

  const onMeetingStart = (task) => {
    console.log(meetingDetails)
    setMeetingDetails([{topic: task.topic, time: task.time}])
  }
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<First/>}/>
          <Route path='meeting' element={<MeetingPage/>}/>
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
