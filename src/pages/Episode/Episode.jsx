import { useLocation } from 'react-router';
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer';
import { StyledEpisode } from './Episode.styled';

export const Episode = () => {
	const { state } = useLocation();

	return (
		<StyledEpisode className='episode'>
			<div className='player-container'>
				<h2 className='title'>{state?.episode?.trackName}</h2>
				<p>{state?.episode?.shortDescription}</p>
				<hr />
				<AudioPlayer state={state} />
			</div>
		</StyledEpisode>
	);
};
