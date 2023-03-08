import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Podcast, Episode } from './pages';
import { GlobalStyle } from './styles/GlobalStyles';
import { LoadingProvider } from './context/LoadingContext';

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<LoadingProvider>
					<Header />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='podcast/:podcastId' element={<Podcast />} />
						<Route path='podcast/:podcastId/episode/:episodeId' element={<Episode />} />
					</Routes>
				</LoadingProvider>
			</BrowserRouter>
		</>
	);
};
