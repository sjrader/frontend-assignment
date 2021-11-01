import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg'

const MovieModal = ({ movie, closingMovieModal}) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']
    let releaseDate = movie.release_date
    releaseDate = releaseDate.split('-');
    let translatedReleaseDate = (months[releaseDate[1] - 1]+ ' ' + releaseDate[2] + ', ' + releaseDate[0])
    const [averageScore, setAverageScore] = useState('');

    let image = movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500/` + movie.poster_path : logo

    const calculateVoteAverage = () => {
        if (movie.vote_average === 0) {
            setAverageScore('No votes yet!')
        } else {
            setAverageScore(movie.vote_average)
        }
    }
    useEffect(() => {
        calculateVoteAverage();
    })

    return (
        <div className={'movieModal'}>
            <button className={'modalExitBtn'} onClick={() => closingMovieModal(false)}>Exit</button>
            <div>
            <h2 className={'modalTitle'}>{movie.title}</h2>
                <h3>{translatedReleaseDate}</h3>
            </div>
            {image === logo ?
                <div className={'noCardImageModal'}>
                    <img alt={'Movie Poster'} src={image} />
                </div>
                :
                <img alt={'Movie Poster'} className={'cardImageModal'} src={image} />}
            <p className={'movieOverview'}>Overview: {movie.overview}</p>
            <h3 className={'modalRatings'}>Average user score: {averageScore}</h3>
        </div>
    )
};

export default MovieModal;