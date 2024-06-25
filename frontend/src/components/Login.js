import React, { useState } from 'react'
import Header from './Header'
import NetflixBg from '../Images/Netflix-background.webp'
import axios from 'axios';
import { API_END_POINT } from './utils/constant';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';

function Login() {

  const [isLogin, setLogin] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate =  useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(store => store.app.isLoading)

  const loginHandler = () => {
    setLogin(!isLogin);
  }

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if(isLogin) {
      // Login
      const user = {email, password};
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, { headers: {"Content-Type": "application/json"} , withCredentials: true});
        if(res.data.success) {
          toast.success(res.data.message)
        }
        dispatch(setUser(res.data.user))
        navigate("/browse")
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error)
      } finally {
        dispatch(setLoading(false))
      }

    } else {
      // Register
      dispatch(setLoading(true));
      const user = {fullName, email, password}
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, { headers: {"Content-Type": "application/json"} , withCredentials: true});
        if(res.data.success){
          toast.success(res.data.message)
        }
        setLogin(true)
        
      }
      catch(error) {
        toast.error(error.response.data.message);
        console.log(error)
      }
      finally {
        dispatch(setLoading(false))
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header/>
      <div>
        <img className=' absolute w-[100vw] h-[100vh]'  
        src={NetflixBg} alt='banner' />
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

          <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...": isLogin ? "Login" : "SignUp"}`}</button>

          <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"  }
            <span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "SignUp" : "Login"}</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
