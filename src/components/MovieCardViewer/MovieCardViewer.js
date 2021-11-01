import {useEffect, useState} from 'react';
import logo from '../../images/logo.svg'

const MovieCardViewer = ({ movie }) => {

   const [averageScore, setAverageScore] = useState('');
   
    let image = movie.poster_path !== null ? `https://image.tmdb.org/t/p/w500/` + movie.poster_path : logo

    const calculateVoteAverage = () => {
        if (movie.vote_average === 0) {
            setAverageScore('No user votes yet!')
        } else {
            setAverageScore(movie.vote_average)
        }
    }
    useEffect(() => {
        calculateVoteAverage();
    },)

    return (
        <div className={'movieCard'}>
            {image === logo ?
                <div className={'noCardImage'}>
            <img alt={'Movie Poster'}  src={image} />
            <h2>No poster found</h2> 
            <h3>{averageScore}</h3>
            </div>
            : 
                <img alt={'Movie Poster'} className={'cardImage'} src={image} />
                }
            <div className={'movieTitle'}>
                <h2>{movie.title}</h2 >
            </div>
        </div>
    )
}

export default MovieCardViewer;