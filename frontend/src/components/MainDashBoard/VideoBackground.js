import React from 'react'

function VideoBackground() {

  

  return (
    <div className=' w-screen'>
        <iframe 
        className=' w-screen aspect-video'
        src="https://www.youtube.com/embed/CHSnz0bCaUk?si=szunT6lxxOACipVG&autoplay=1&mute=1" 
        title="YouTube video player" frameborder="0" 
         allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground
