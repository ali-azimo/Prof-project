import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-700'>Moz</span>
                    <span className='text-slate-600'>Shoping</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-full flex items-center cursor-pointer'>
                <input 
                    type="text" 
                    placeholder='search...'  
                    className='bg-transparent outline-0 w-24 sm:w-64'
                />
                <FaSearch className='text-sky-600'/>
            </form>

            <ul className=' flex gap-2'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 font-semibold hover:underline'>Home</li>
                </Link>
                <Link to='about'>
                    <li className='hidden sm:inline text-slate-700 font-semibold hover:underline'>Sobre</li>
                </Link>
                <Link to='sign-in'>
                    <li className='sm:inline text-slate-700 font-semibold hover:underline'>Sign-In</li>
                </Link>
                
            </ul>
        </div>
    </header>
  )
}
