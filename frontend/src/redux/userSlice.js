import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: "user",
    names:"movie",
    initialState: {
        user: null,
        isLoading: false,
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        toggle:false,
        trailerMovie: null
    },
    reducers: {
        // actions 
        setUser:(state, action) => {
            state.user = action.payload;
        },
        setLoading:(state, action) => {
            state.isLoading = action.payload
        },
        getNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload
        },
        getPopularMovies:(state, action) => {
            state.popularMovies = action.payload
        },
        getTopRatedMovies:(state, action) => {
            state.topRatedMovies = action.payload
        },
        getUpComingMovies:(state, action) => {
            state.upComingMovies = action.payload
        },
        setToggle:(state) => {
            state.toggle = !state.toggle
        },
        getTrailerMovie:(state, action) => {
            state.trailerMovie = action.payload
        }
    }
})
export const {setUser, setLoading, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies, setToggle, getTrailerMovie} = userSlice.actions;
export default userSlice.reducer;