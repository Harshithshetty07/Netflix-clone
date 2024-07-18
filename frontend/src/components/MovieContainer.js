import React, { useMemo } from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
    const { popularMovie, nowPlayingMovies, topRatedMovies, upcomingMovies } = useSelector(
        (store) => store.movie
    );

    // Memoize the MovieList components to avoid unnecessary re-renders
    const popularMoviesComponent = useMemo(
        () => <MovieList title="Popular Movies" movies={popularMovie} />,
        [popularMovie]
    );
    const nowPlayingMoviesComponent = useMemo(
        () => <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />,
        [nowPlayingMovies]
    );
    const topRatedMoviesComponent = useMemo(
        () => <MovieList title="Top Rated Movies" movies={topRatedMovies} />,
        [topRatedMovies]
    );
    const upcomingMoviesComponent = useMemo(
        () => <MovieList title="Upcoming Movies" movies={upcomingMovies} />,
        [upcomingMovies]
    );

    return (
        <div className="bg-black">
            <div className="lg:-mt-[9rem] md:mt-1 relative z-10 sm:mt-12 sm:z-10 xl:-mt-[10rem] xl:relative xl:z-10">
                {popularMoviesComponent}
                {nowPlayingMoviesComponent}
                {topRatedMoviesComponent}
                {upcomingMoviesComponent}
            </div>
        </div>
    );
};

export default MovieContainer;
