import { useLocation } from 'react-router';
import { StyledEpisode } from './Episode.styled';

export const Episode = () => {
	const { state } = useLocation();

	return (
		<StyledEpisode className='episode'>
			<div className='player-container'>
				<h2 className='title'>{state?.episode?.trackName}</h2>
				<p>{state?.episode?.shortDescription}</p>
				<hr />

				<audio
					className='audio'
					controls
					preload='none'
					controlsList='nodownload noplaybackrate'
					src={state?.episode?.episodeUrl}
				></audio>
			</div>
		</StyledEpisode>
	);
};
