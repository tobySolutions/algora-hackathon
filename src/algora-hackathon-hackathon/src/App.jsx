import './App.css'
import { StateContextProvider } from './hooks/context';
import MeetingPage from './components/pages/MeetingPage/MeetingPage';

function App() {
  return (
    <StateContextProvider>
      <MeetingPage/>
    </StateContextProvider>
  );
}

export default App
