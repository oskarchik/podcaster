import { useMemo, useState } from 'react';

import { Search, Grid } from '../../components';

import { StyledHome } from './Home.styled';

import { useFetch } from '../../hooks/useFetch';
import { db } from '../../utils/localdb';

export const Home = () => {
	const { data } = useFetch({
		id: 1,
		collection: db.podcasts,
		url: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
	});

	const [query, setQuery] = useState('');

	const filteredPodcasts = useMemo(() => {
		return data?.filter((podcast) => {
			if (query === '') return data;
			return (
				podcast['im:artist']?.label.toLowerCase().includes(query.toLocaleLowerCase()) ||
				podcast['im:name']?.label.toLowerCase().includes(query.toLocaleLowerCase())
			);
		});
	});

	return (
		<StyledHome>
			{data ? (
				<>
					<Search count={data?.length} query={query} setQuery={setQuery} />
					<Grid podcasts={filteredPodcasts} />
				</>
			) : null}
		</StyledHome>
	);
};
