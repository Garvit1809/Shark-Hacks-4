import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
