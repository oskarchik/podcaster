import { useEffect, useState } from 'react';
import { useLoading } from './useLoading';

export const useFetch = ({ url }) => {
	const [data, setData] = useState();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const items = await response.json();

				setData(items.feed?.entry);
				setIsLoading(false);
			} catch (error) {
				console.error(error.stack);
			}
		};

		fetchData();
	}, []);
	return { data, setData };
};
