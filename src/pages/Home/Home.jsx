import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledHome } from './Home.styled';

export const Home = () => {
	const [podcasts, setPodcasts] = useState();
	useEffect(() => {
		const fetchPodcasts = async () => {
			try {
				const response = await fetch(
					'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
				);
				const items = await response.json();

				setPodcasts(items.feed?.entry);
			} catch (error) {
				console.error(error.stack);
			}
		};
		fetchPodcasts();
	}, []);

	return (
		<StyledHome>
			<div className='search'>
				<span className='search-count'>{podcasts?.length}</span>
				<input className='search-input' type='text' placeholder='Filter podcasts...' />
			</div>
			<div className='grid'>
				{podcasts?.map((podcast) => {
					return (
						<Link
							to={`/podcast/${podcast.id?.attributes['im:id']}`}
							state={podcast}
							key={podcast.id?.label}
							className='card'
						>
							<div className='cover-container'>
								<img
									src={podcast['im:image'][2]?.label}
									className='cover-image'
									alt={podcast['im:name']?.label}
								/>
							</div>
							<div className='card-text'>
								<p className='card-name'>
									<b>{podcast['im:name']?.label}</b>
								</p>
								<small>Author: {podcast['im:artist']?.label}</small>
							</div>
						</Link>
					);
				})}
			</div>
		</StyledHome>
	);
};
