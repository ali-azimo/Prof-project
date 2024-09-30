import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart, 
  signInSucess, 
  signInFulure
} from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
       dispatch(signInFulure(data.message));
        return;
      }
      dispatch(signInSucess(data));
      navigate('/');
    }catch(error){
      dispatch(signInFulure(error.message))
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
      Entrar
      </h1>

      <form onSubmit={handleSubmit}
        className='flex flex-col gap-4'>

        <input 
          className='border p-3 rounded-lg outline-blue-700' 
          type="email" 
          placeholder='Email valido' id="email" 
          onChange={handleChange}/>
        <input 
          className='border p-3 rounded-lg outline-blue-700' 
          type="password" 
          placeholder='senha' id="password" 
          onChange={handleChange}
        />

        <button 
          disabled={loading}
          className='bg-sky-700 font-semibold text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            
          {loading ? 'loading...' : 'Entrar'}
        </button>
      </form>
      {error &&  <p className="text-red-600 mt-5 text-center font-semibold">{error}</p>}
        <div className="flex gap-2 mt-5">
          <p>Nao tens uma conta?</p>
          <Link to='/sign-up'>
            <span className='text-blue-700 font-semibold hover:underline'>Cadatrar</span>
          </Link>
        </div>

      
    </div>
  );
}
