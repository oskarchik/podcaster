import { useEffect, useState } from 'react';

export const useFetch = ({ url }) => {
	const [data, setData] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const items = await response.json();

				setData(items.feed?.entry);
			} catch (error) {
				console.error(error.stack);
			}
		};
		fetchData();
	}, []);
	return { data, setData };
};
