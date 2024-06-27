import axios from 'axios';
import { options} from '../components/utils/constant';
import {useDispatch} from 'react-redux';
import { getTrailerMovie } from '../redux/userSlice';

const useMovieId = async (movieId) => {
    const dispatch = useDispatch()

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        console.log(res.data.results)
        const trailer = res?.data?.results?.filter((item) => {
            return item.type === "Trailer"
        })
        dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]))
    } catch (error) {
        console.log(error)
    }
}

export default useMovieId
