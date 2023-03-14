import { Link, useLocation } from 'react-router-dom';
import { StyledAside } from './Aside.styled';

export const Aside = ({ podcast }) => {
	const { state } = useLocation();
	// console.log('🚀 ~ file: Aside.jsx:6 ~ Aside ~ state:', state);
	return (
		<StyledAside>
			{podcast && (
				<>
					<div className='container container-image'>
						<Link to={`/podcast/${podcast.id?.attributes['im:id']}`} state={state} className='link'>
							<img className='image' src={podcast['im:image'][2]?.label} alt={podcast['im:name']} />
						</Link>
					</div>
					<hr className='line' />
					<div className='container container-title'>
						<Link to={`/podcast/${podcast.id?.attributes['im:id']}`} state={state} className='link'>
							<h4 className='title'>{podcast['im:name']?.label}</h4>
							<p className='author'>by {podcast['im:artist']?.label}</p>
						</Link>
					</div>
					<hr className='line' />

					<div className='container container-description'>
						<h4 className='description-title'>Description:</h4>
						<p className='description-text'>{podcast.summary?.label}</p>
					</div>
				</>
			)}
		</StyledAside>
	);
};
