import './App.css'
import { StateContextProvider } from './hooks/context';
import MeetingPage from './components/pages/MeetingPage/MeetingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <StateContextProvider>
        <Routes>
          <MeetingPage/>
        </Routes>
      </StateContextProvider>
    </BrowserRouter>
    
  );
}

export default App
