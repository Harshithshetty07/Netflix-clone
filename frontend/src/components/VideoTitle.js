import React, { useMemo } from 'react';
import { CiPlay1, CiCircleInfo } from 'react-icons/ci';

const VideoTitle = ({ title, overview }) => {
    const memoizedTitle = useMemo(() => (
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>{title}</h1>
    ), [title]);

    const memoizedOverview = useMemo(() => (
        <p className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-4 text-sm sm:text-base md:text-lg lg:text-xl'>{overview}</p>
    ), [overview]);

    return (
        <div className='absolute text-white top-1/2 transform -translate-y-1/2 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20'>
            {memoizedTitle}
            {memoizedOverview}
            <div className='flex flex-wrap mt-8 space-x-2'>
                <button className='flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-md hover:bg-opacity-80'>
                    <CiPlay1 size="24px" />
                    <span className='ml-1'>Play</span>
                </button>
                <button className='flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-500 bg-opacity-50 text-white rounded-md hover:bg-opacity-80'>
                    <CiCircleInfo size="24px" />
                    <span className='ml-1'>Watch more</span>
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;
