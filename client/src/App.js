import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PitcherDetails from './Pages/PitcherDetails';
import Feed from './Pages/Feed';
import Auth from './Pages/Auth';
import Chat from './Pages/Chat';
import VideoCall from './Pages/VideoCall'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/auth' element={<Auth/>} />
    <Route path='/pitcher-details' element={<PitcherDetails/>} />
    <Route path='/' element={<Home/>} exact />
    <Route path='/feed' element={<Feed/>} />
    <Route path='/chats' element={<Chat/>} />
    <Route path='/meet' element={<VideoCall/>} />
    </Routes>
    </div>
    );
}

export default App;
