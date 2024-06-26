import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";

function VideoTitle({title, overview}) {
  return (
    <div className=' w-screen aspect-video absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className=' w-1/3 mt-4'>{overview} </p>
        <div className='flex mt-8 '>
            <button className=' flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                 <FaPlay size={23}/>
                  <span className=' ml-1'> Play</span> 
                  </button>
            <button className='flex items-centerpx-6 mx-2 py-2 px-6 bg-gray-500 bg-opacity-50 text-black rounded-md'> 
                <LuInfo size={24}/> 
                <span className='ml-1'>Watch More</span>
                </button>
        </div>
    </div>
  )
}

export default VideoTitle
