import { useLocation } from 'react-router';

import { AudioPlayer } from '../../components';

import { StyledEpisode } from './Episode.styled';

export const Episode = () => {
	const { state } = useLocation();

	return (
		<StyledEpisode className='episode'>
			<div className='player-container'>
				<h2 className='title'>{state?.episode?.trackName}</h2>
				<p>
					{state?.episode?.shortDescription
						? state?.episode?.shortDescription
						: state?.episode?.description}
				</p>
				<hr />
				<AudioPlayer state={state} />
			</div>
		</StyledEpisode>
	);
};
