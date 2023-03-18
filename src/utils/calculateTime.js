export const calculateTime = (secs) => {
	let minutes = Math.floor(secs / 60);

	let hours = Math.floor(minutes / 60);

	if (minutes > 59) {
		console.log('called');
		minutes = minutes - 60 * hours;
	}

	const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
	return `${hours}:${returnedMinutes}`;
};
