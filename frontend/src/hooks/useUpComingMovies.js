import axios from 'axios'
import { options, Upcoming_Movies } from '../components/utils/constant'
import { useDispatch } from 'react-redux'
import { getUpComingMovies } from '../redux/userSlice'

const  useUpComingMovies = async() => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Upcoming_Movies, options);
        dispatch(getUpComingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}

export default useUpComingMovies
