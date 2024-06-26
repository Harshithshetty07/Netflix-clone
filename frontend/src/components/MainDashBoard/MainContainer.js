import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {

  const movie = useSelector(store => store.app?.nowPlayingMovies);
  if(!movie) return  // Early return in React
  console.log(movie)

  const {overview, id, title} = movie[4]


  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieid={id}/>
    </div>
  )
}

export default MainContainer
