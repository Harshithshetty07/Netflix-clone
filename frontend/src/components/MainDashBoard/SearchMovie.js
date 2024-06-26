import React from 'react'

function SearchMovie() {
  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
        <form className='w-[50%]'>
            <div className='flex justify-between shadow-md border-2 border-gray-200 rounded-lg p-2 w-[100%]'>
                <input type='text' placeholder='Search Movies...' className='w-full outline-none rounded-md text-lg '/>
            <button className=' bg-red-800 text-white rounded-md px-4 py-2'>Search</button>
            </div>
           
        </form>
    </div>
  )
}

export default SearchMovie
