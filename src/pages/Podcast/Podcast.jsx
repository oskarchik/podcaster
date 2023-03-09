import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Table } from '../../components';
import { StyledPodcast } from './Podcast.styled';

import { useLoading } from '../../hooks/useLoading';

async function getEpisodes(podcastId) {
	try {
		const response = await fetch(
			`https://api.allorigins.win/get?url=${encodeURIComponent(`https://
			itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=10`)}`
		);
		const data = await response.json();
		const parsedData = await JSON.parse(data.contents);

		return parsedData;
	} catch (error) {
		console.log(error);
	}
}

export const Podcast = () => {
	const { podcastId } = useParams();
	const { setIsLoading } = useLoading();
	const [episodes, setEpisodes] = useState();

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			setEpisodes(await getEpisodes(podcastId));
			setIsLoading(false);
		})();
	}, []);

	return (
		<StyledPodcast className='podcast'>
			<div className='main'>
				{episodes && (
					<>
						<div className='title'>
							<p>Episodes:{episodes.resultCount}</p>
						</div>
						<Table podcastId={podcastId} episodes={episodes} />
					</>
				)}
			</div>
		</StyledPodcast>
	);
};
