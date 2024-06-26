import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'

function MovieCard({posterPath}) {
  return (
    <div className=' w-60 pr-2'>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='card-img' />
    </div>
  )
}

export default MovieCard
