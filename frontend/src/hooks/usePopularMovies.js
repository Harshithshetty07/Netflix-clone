import axios from 'axios'
import { options, Popular_Movies } from '../components/utils/constant'
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../redux/userSlice';

const usePopularMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Popular_Movies, options);
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}

export default usePopularMovies
