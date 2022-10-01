import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import PitcherDetails from './Pages/PitcherDetails';
import Feed from './Pages/Feed';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/pitcher-details' element={<PitcherDetails/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/feed' element={<Feed/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
