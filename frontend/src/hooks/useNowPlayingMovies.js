import axios from 'axios';
import { NOW_PLAYNG_MOVIES, options } from '../components/utils/constant';
import { getNowPlayingMovies } from '../redux/userSlice';
import { useDispatch } from 'react-redux';


const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();

    try {
      const res = await axios.get(NOW_PLAYNG_MOVIES, options)
      dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }
  export default useNowPlayingMovies