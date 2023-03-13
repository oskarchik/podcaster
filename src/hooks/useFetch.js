import { useEffect, useState } from 'react';
import { useLoading } from './useLoading';
import { db } from '../utils/localdb';

export const useFetch = ({ url }) => {
	const [data, setData] = useState();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setIsLoading(true);

		const getPodcasts = async () => {
			try {
				const allPodcasts = await db.podcasts
					.where('id')
					.belowOrEqual(Date.now() - 24 * 60 * 60 * 1000)
					.toArray();
				if (allPodcasts.length > 0) {
					setData(allPodcasts[0].data);
					setIsLoading(false);
				} else {
					const fetchData = async () => {
						try {
							const response = await fetch(url);
							const items = await response.json();

							await db.podcasts.put({ id: 1, data: items.feed.entry, timestamp: Date.now() });
							setData(items.feed?.entry);

							setIsLoading(false);
						} catch (error) {
							console.error(error.stack);
						}
					};
					fetchData();
				}
			} catch (error) {
				console.log(error);
			}
		};

		getPodcasts();
	}, []);

	return { data, setData };
};
