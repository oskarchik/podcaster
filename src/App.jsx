import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Podcast, Episode } from './pages';

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='podcast/:podcastId' element={<Podcast />} />
				<Route path='podcast/:podcastId/episode/:episodeId' element={<Episode />} />
			</Routes>
		</BrowserRouter>
	);
};
