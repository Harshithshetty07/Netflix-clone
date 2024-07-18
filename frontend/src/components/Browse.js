import React, { useEffect, useMemo, lazy, Suspense } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

// Lazy load components
const Header = lazy(() => import('./Header'));
const MainContainer = lazy(() => import('./MainContainer'));
const MovieContainer = lazy(() => import('./MovieContainer'));
const SearchMovie = lazy(() => import('./SearchMovie'));

const Browse = () => {
    const user = useSelector(store => store.app.user);
    const toggle = useSelector(store => store.movie.toggle);
    const navigate = useNavigate();

    // Custom hooks for fetching movie data
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        if (!user) {
            navigate("/browse");
        }
    }, [user, navigate]);

    // Memoize the content based on toggle state
    const renderedContent = useMemo(() => {
        if (toggle) {
            return <SearchMovie />;
        } else {
            return (
                <>
                    <MainContainer />
                    <MovieContainer />
                </>
            );
        }
    }, [toggle]);

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                {renderedContent}
            </Suspense>
        </div>
    );
}

export default Browse;
