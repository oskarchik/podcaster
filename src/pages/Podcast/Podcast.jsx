import { useParams } from 'react-router';

import { Table } from '../../components';
import { StyledPodcast } from './Podcast.styled';

import { db } from '../../utils/localdb';

import { useFetch } from '../../hooks/useFetch';

export const Podcast = () => {
	const { podcastId } = useParams();
	const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
		`https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
	)}`;

	const { data } = useFetch({
		id: podcastId,
		collection: db.podcastId,
		url,
	});

	return (
		<StyledPodcast className='podcast'>
			<div className='main'>
				{data && (
					<>
						<div className='title'>
							<p>Episodes:{data.length}</p>
						</div>
						<Table podcastId={podcastId} episodes={data} />
					</>
				)}
			</div>
		</StyledPodcast>
	);
};
