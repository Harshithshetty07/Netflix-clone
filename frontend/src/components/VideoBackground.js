import React, { useMemo } from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
    const trailerMovie = useSelector((store) => store.movie.trailerMovie);

    useMovieById(movieId);

    const videoSrc = useMemo(() => {
        if (trailerMovie?.key) {
            return `https://www.youtube.com/embed/${trailerMovie.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`;
        }
        return '';
    }, [trailerMovie?.key]);

    return (
        <div className="w-[vw] overflow-hidden">
            {videoSrc && (
                <iframe
                    className={`${bool ? 'w-[100%]' : 'w-screen aspect-video'}`}
                    src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoBackground;
