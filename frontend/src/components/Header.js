import React from 'react'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { API_END_POINT} from './utils/constant'
import { setToggle, setUser} from '../redux/userSlice'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Header() {

  const user = useSelector((store)=> store.app.user);
  const toggle = useSelector(store => store.app.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`, { headers: {"Content-Type": "application/json"} , withCredentials: true} )
      if(res.data.success) {
        toast.success(res.data.message)
      }
      console.log(res)
      dispatch(setUser(null))
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const toggleHandler = () => {
    dispatch(setToggle())
  }


  return (
    <div className=' absolute z-10 flex w-[100%] px-6 items-center justify-between bg-gradient-to-b from-black'>
      <img className='w-56' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png' alt='netflix-logo' />
      {
        user && (
          <div className='flex items-center'>
          <MdOutlineArrowDropDownCircle size='24px' color='white'/>
          <h1 className=' text-lg font-medium text-white'>{user.fullName}</h1>
          <div className=' ml-4'>
            <button onClick={logOutHandler} className=' bg-red-800 text-white px-4 py-2'>Logout</button>
          <button onClick={toggleHandler} className=' bg-red-800 text-white px-4 py-2 ml-2'>{toggle ? "Home" : "Search Movies"}</button>
          </div>
          
        </div>
        )
      }
     
    </div>
  )
}

export default Header
