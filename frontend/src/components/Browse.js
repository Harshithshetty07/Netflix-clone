import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import MainContainer from './MainDashBoard/MainContainer';
import MovieContainer from './MainDashBoard/MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import SearchMovie from './MainDashBoard/SearchMovie';


function Browse() {

  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store=> store.app.toggle)
  
  const navigate = useNavigate();

  // My Custom Hook 
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  useEffect(() => {
    if(!user) {
      navigate("/")
    }
  }, [])


  return (
    <div>
      <Header/>
      <div>
        {
          toggle ? <SearchMovie/> : (
            <>
            <MainContainer/>
            <MovieContainer/>
            </>
          )
        }
        
      </div>
    </div>
  )
}

export default Browse
