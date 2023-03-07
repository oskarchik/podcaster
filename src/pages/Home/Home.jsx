import { Search, Grid } from '../../components';

import { useFetch } from '../../hooks/useFetch';

import { StyledHome } from './Home.styled';

export const Home = () => {
	const { data } = useFetch({
		url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
	});

	return (
		<StyledHome>
			{data ? (
				<>
					<Search podcasts={data} />
					<Grid podcasts={data} />
				</>
			) : null}
		</StyledHome>
	);
};
