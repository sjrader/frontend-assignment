import React, {useEffect, useState} from 'react';
import MovieCardViewer from '../MovieCardViewer/MovieCardViewer';
import MovieModal from '../MovieModal/MovieModal';

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
let dateObject = new Date();
let day = dateObject.getDate();
if (day < 10) day = '0' + String(day)
let month = dateObject.getMonth() + 1;
if (month < 10) month = '0' + String(month);
let year = dateObject.getFullYear();
let dateToday = year + '-' + month + '-' + day;
const SplashPage = ({ movieTitle }) => {
    let defaultCallAPI = `https://api.themoviedb.org/3/discover/movie?api_key=` + API_KEY + `&language=en-US&sort_by=primary_release_date.desc&primary_release_date.lte=` + dateToday + `&include_adult=false&primary_release_year=` + year + `&with_original_language=en&vote_count.gte=10`
    let searchMoviesTitleAPI = `https://api.themoviedb.org/3/search/movie?api_key=` + API_KEY + `&query=` + movieTitle + `&language=en-US&page=1&include_adult=false&sort_by=original_release_date.asc`;

    
    const [movies, setMovies] = useState('');
    const [modalMovie, setModalMovie] = useState('');
    const [modal, setModal] = useState(false);

    const handleMovieModalClick = (e, movie) => {
        e.preventDefault();
        setModalMovie(movie);
        setModal(true)
    };

    async function callingMovieAPI() {
        let apiUrl
         if (movieTitle === '') apiUrl = defaultCallAPI;
         if (movieTitle.length > 0) apiUrl = searchMoviesTitleAPI;
         try {
             const response = await fetch(apiUrl);
             const movieData = await response.json();
             setMovies(movieData);
         } catch(e) {
             console.log(e);
         }
    }

    useEffect(() => {
         callingMovieAPI();
    }, [movieTitle])
    return(
        <div>
            {movies === '' &&
            <p>loading...</p>
            }
            {movies !== '' &&
                <div className={'allMovieCards'} >
                    {modal === true && 
                    <div className={'modalCard'}>
                    <MovieModal movie={modalMovie} closingMovieModal={setModal}/>
                    </div>
                    }
                {movies.results.slice(0, 18).map((movie, i) => (
                    <div className={'movieCardContainer'}
                    onClick={(e) => handleMovieModalClick(e, movie)}
                    >
                    <MovieCardViewer movie={movie} key={i} />
                    </div>
                ))}
            </div>
            }
        </div>
    )
};

export default SplashPage;