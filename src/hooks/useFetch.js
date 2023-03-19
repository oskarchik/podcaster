import { useState, useEffect } from 'react';
import { useLoading } from './useLoading';

export const useFetch = ({ id, collection, url }) => {
	const [data, setData] = useState();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		setIsLoading(true);


		const getResources = async () => {
			try {
				const resources = await collection.where('id').equals(id).toArray();

				if (resources.length > 0 && Date.now() - 24 * 60 * 60 * 1000 <= resources[0].timestamp) {
					setData(resources[0].data);
					setIsLoading(false);
					return;
				}
				const fetchData = async () => {
					try {
						const response = await fetch(url);
						const data = await response.json();

						const parsedData = data.feed ? data.feed.entry : await JSON.parse(data.contents);

						const returnData = parsedData.results ? parsedData.results.slice(1) : parsedData;

						await collection.put({
							id,
							data: returnData,
							timestamp: Date.now(),
						});
						setData(returnData);
						setIsLoading(false);
					} catch (error) {
						console.log(error);
					}
				};
				fetchData();
			} catch (error) {
				console.log(error);
			}
		};

		getResources();

	}, []);

	return { data, setData };
};
