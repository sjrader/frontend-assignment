import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg'

const MovieModal = ({ movie, closingMovieModal}) => {


    const [averageScore, setAverageScore] = useState('');

    let image = movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500/` + movie.poster_path : logo

    const calculateVoteAverage = () => {
        if (movie.vote_average === 0) {
            setAverageScore('No\nvotes\nyet!')
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
            <h3 className={'modalTitle'}>{movie.title}</h3>
            <h3 className={'modalRatings'}>Average user score: {averageScore}</h3>
            {console.log(movie)}
            </div>
            {image === logo ?
                <div className={'noCardImageModal'}>
                    <img alt={'Movie Poster'} src={image} />
                </div>
                :
                <img alt={'Movie Poster'} className={'cardImageModal'} src={image} />}
            <p className={'movieOverview'}>Overview: {movie.overview}</p>
        </div>
    )
};

export default MovieModal;