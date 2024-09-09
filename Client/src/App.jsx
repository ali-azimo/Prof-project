import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIng from './pages/SignIng';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';


export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIng/>}/>
        <Route path='/sign-out' element={<SignOut/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
  )
}
