import React, {useState} from 'react'
import logo from '../images/logo.svg';
import '../index.css'
import SplashPage from './SplashPage/SplashPage';



const App = () => {
	const [movieTitle, setMovieTitle] = useState('');
	return (
		<div className={'wholePage'}>
			<div className={'topBar'}>
				<img src={logo} alt="Timescale" />
				<input
					className={'searchBar'}
					value={movieTitle}
					onChange={(e) => setMovieTitle(e.target.value)}
					placeholder={'Search for a movie'}
				/>
			</div>
			<h1 className={'cardHeader'}>{movieTitle === '' ? 'Most Recent Movies': 'Results for ' + movieTitle}</h1>
			<SplashPage movieTitle={movieTitle} />
		</div>
	)
}

export default App;
