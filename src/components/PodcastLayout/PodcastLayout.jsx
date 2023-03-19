import { Outlet } from 'react-router-dom';

import { Aside } from '../Aside/Aside';

import { StyledPodcastLayout } from './PodcastLayout.styled';

import { useLocation } from 'react-router-dom';

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
