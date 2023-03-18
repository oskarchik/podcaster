export const millisToDuration = (millis) => {
	let seconds = millis / 1000;
	const hours = parseInt(seconds / 3600);
	seconds = seconds % 3600;
	const minutes = parseInt(seconds / 60);
	seconds = seconds % 60;

	const formattedTime = [
		hours.toString().padStart(2, '0'),
		minutes.toString().padStart(2, '0'),
		seconds.toString().padStart(2, '0'),
	].join(':');

	return formattedTime;
};
