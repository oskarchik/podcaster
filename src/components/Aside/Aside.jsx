import { StyledAside } from './Aside.styled';

export const Aside = ({ podcast }) => {
	return (
		<StyledAside>
			{podcast && (
				<>
					<div className='container container-image'>
						<img className='image' src={podcast['im:image'][2]?.label} alt={podcast['im:name']} />
					</div>
					<hr className='line' />
					<div className='container container-title'>
						<h4 className='title'>{podcast['im:name']?.label}</h4>
						<p className='author'>by {podcast['im:artist']?.label}</p>
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
