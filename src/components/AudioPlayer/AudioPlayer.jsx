import { useEffect, useRef, useState } from 'react';
import { Controls } from '../Controls/Controls';
import { useLoading } from '../../hooks/useLoading';

export const AudioPlayer = ({ state }) => {
	const audioRef = useRef();
	const [duration, setDuration] = useState();
	const [currentTime, setCurrentTime] = useState();
	const [isMuted, setIsMuted] = useState(false);
	const [clickedTime, setClickedTime] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const { setIsLoading } = useLoading();

	const currentPercentage = (currentTime / duration) * 100;

	const handleMute = () => {
		setIsMuted(!isMuted);
	};
	const handlePlayPause = () => {
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	const onLoadedMetadata = () => {
		setDuration(audioRef.current?.duration);
		setCurrentTime(audioRef.current?.currentTime);
	};
	const setAudioTime = () => setCurrentTime(audioRef.current?.currentTime);

	useEffect(() => {
		audioRef.current?.addEventListener('timeupdate', setAudioTime);

		if (clickedTime && clickedTime !== currentTime) {
			audioRef.current.currentTime = clickedTime;
			setClickedTime(null);
		}
		return () => {
			audioRef.current?.removeEventListener('timeupdate', setAudioTime);
		};
	}, []);

	useEffect(() => {
		setIsLoading(true);
		if (audioRef.current.duration) {
			return setIsLoading(false);
		}
	}, [audioRef.current?.duration]);

	return (
		<>
			<audio
				ref={audioRef}
				className='audio'
				preload='metadata'
				controlsList='nodownload noplaybackrate'
				onLoadedMetadata={onLoadedMetadata}
				src={state?.episode?.episodeUrl}
				muted={isMuted}
			></audio>
			{audioRef && (
				<Controls
					handleMute={handleMute}
					handlePlayPause={handlePlayPause}
					audioRef={audioRef}
					isMuted={isMuted}
					isPlaying={isPlaying}
					currentTime={currentTime}
					currentPercentage={currentPercentage}
					handleCurrentTime={setCurrentTime}
				/>
			)}
		</>
	);
};
