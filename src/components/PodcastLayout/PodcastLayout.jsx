import { Outlet, useLocation } from 'react-router-dom';

import { Aside } from '../Aside/Aside';

import { StyledPodcastLayout } from './PodcastLayout.styled';

export const PodcastLayout = () => {
	const { state } = useLocation();

	return (
		<StyledPodcastLayout>
			<Aside podcast={state.podcast} className='aside' />
			<div className='outlet'>
				<Outlet />
			</div>
		</StyledPodcastLayout>
	);
};
