import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIng from './pages/SignIng';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './Components/Header';
import SignUp from './pages/SignUp';


export default function App() {
  return (
      <BrowserRouter>
      {/* Usar o header para todos o compontent */}

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIng/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
  )
}
