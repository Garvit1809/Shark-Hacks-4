import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PitcherDetails from './Pages/PitcherDetails';
import Feed from './Pages/Feed';
import Auth from './Pages/Auth';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/auth' element={<Auth/>} />
    <Route path='/pitcher-details' element={<PitcherDetails/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/feed' element={<Feed/>} />
    </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
