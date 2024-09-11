import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Cadastrar
      </h1>

      <form className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg outline-blue-700' 
        type="text" placeholder='Usuario' id="username" />

        <input className='border p-3 rounded-lg outline-blue-700' 
        type="email" placeholder='Email valido' id="email" />
        <input className='border p-3 rounded-lg outline-blue-700' 
        type="password" placeholder='senha' id="password" />
        <button 
        className='bg-sky-700 font-semibold text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Cadastrar</button>
      </form>
        <div className="flex gap-2 mt-5">
          <p>Tens uma conta?</p>
          <Link to='/sign-in'>
            <span className='text-blue-700 font-semibold hover:underline'>Sign-in</span>
          </Link>
        </div>
    </div>
  )
}
