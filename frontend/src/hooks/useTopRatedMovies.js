import axios from "axios"
import { options, TopRated_Movies } from "../components/utils/constant"
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../redux/userSlice";

const  useTopRatedMovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(TopRated_Movies, options);
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        
    }
}

export default useTopRatedMovies
