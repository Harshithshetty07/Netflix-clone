import React, { useState } from 'react'
import Header from './Header'


function Login() {

  const [isLogin, setLogin] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = () => {
    setLogin(!isLogin);
  }

  const getInputData = (e) => {
    e.preventDefault();
    console.log(fullName, email, password)
    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header/>
      <div>
        <img className=' absolute w-[100vw] h-[100vh]'  
        src='https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp' alt='banner' />
      </div>
      <form  onSubmit={getInputData}
      className='flex flex-col w-3/12 my-36 left-0 p-12 right-0 justify-center items-center rounded-md mx-auto absolute bg-black opacity-90'>
        <h1 className='text-white text-3xl mb-5 font-bold '>{isLogin ? "Login" : "SignUp"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin &&  <input type='text' placeholder='Full Name'  value={fullName} onChange={(e) => setFullName(e.target.value)}
            className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          }
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}
          className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

          <input type='password'  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}
          className=' outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>

          <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin ? "Login" : "SignUp"}</button>

          <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"  }
            <span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "SignUp" : "Login"}</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
