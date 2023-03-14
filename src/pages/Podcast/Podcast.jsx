import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Table } from '../../components';
import { StyledPodcast } from './Podcast.styled';

import { useLoading } from '../../hooks/useLoading';

import { db } from '../../utils/localdb';

async function getEpisodes(podcastId) {
	try {
		const storedPodcast = await db.podcastId.where('id').equals(podcastId).toArray();

		if (Date.now() - 24 * 90 * 90 * 1000 < storedPodcast[0]?.timestamp) {
			return { resultCount: storedPodcast[0]?.length, results: storedPodcast[0]?.data };
		} else {
			const response = await fetch(
				`https://api.allorigins.win/get?url=${encodeURIComponent(`https://
				itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`)}`
			);
			const data = await response.json();
			const parsedData = await JSON.parse(data.contents);

			await db.podcastId.put({ id: podcastId, data: parsedData.results, timestamp: Date.now() });

			return parsedData;
		}
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
