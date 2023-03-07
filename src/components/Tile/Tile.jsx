// import { Link } from 'react-router-dom';
import { StyledTile } from './Tile.styled';

export const Tile = ({ podcast }) => {
	return (
		<StyledTile
			to={`/podcast/${podcast.id?.attributes['im:id']}`}
			state={podcast}
			key={podcast.id?.label}
		>
			<div className='cover-container'>
				<img
					src={podcast['im:image'][2]?.label}
					className='cover-image'
					alt={podcast['im:name']?.label}
				/>
			</div>
			<div className='info-container'>
				<p className='name'>
					<b>{podcast['im:name']?.label}</b>
				</p>
				<small>Author: {podcast['im:artist']?.label}</small>
			</div>
		</StyledTile>
	);
};
