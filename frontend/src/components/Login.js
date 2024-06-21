import React from 'react'
import Header from './Header'


function Login() {
  return (
    <div>
      <Header/>
      <div>
        <img className=' absolute w-[100vw] h-[100vh]'  src='https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp' alt='banner' />
      </div>
      <form className='flex flex-col w-3/12 my-36 left-0 right-0 justify-center items-center mx-auto absolute bg-black'>
        <div className='flex flex-col'>
          <input type='text' placeholder='Full Name'  />
          <input type='email' placeholder='Email' />
          <input type='text'  placeholder='Password' />
        </div>
      </form>
    </div>
  )
}

export default Login
