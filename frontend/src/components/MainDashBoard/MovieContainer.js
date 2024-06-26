import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function MovieContainer() {
  const movie = useSelector(store => store.app)

  return (
    <div className=' bg-black '>
      <div className='-mt-52 relative z-10'>
    <MovieList title={"Popular Movies"} movies={movie.popularMovies}/>
    <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
    <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
    <MovieList title={"Up Coming Movies"} movies={movie.upComingMovies}/>
      </div>
     
    </div>
  )
}

export default MovieContainer
