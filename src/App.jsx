import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Podcast, Episode } from './pages';
import { Header, PodcastLayout } from './components';

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
						<Route path='podcast' element={<PodcastLayout />}>
							<Route path=':podcastId' element={<Podcast />} />
							<Route path=':podcastId/episode/:episodeId' element={<Episode />} />
						</Route>
					</Routes>
				</LoadingProvider>
			</BrowserRouter>
		</>
	);
};
