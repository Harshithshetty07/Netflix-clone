import axios from 'axios'


const useMovieId = async (movieid) => {



    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/{movieid}/videos`)
    } catch (error) {
        
    }
}

export default useMovieId
