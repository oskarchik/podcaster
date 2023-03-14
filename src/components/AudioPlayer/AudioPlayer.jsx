import { useEffect, useState, useRef } from 'react';
import { PlayIcon, PauseIcon, VolumeIcon, MuteIcon } from '../../components/Icons/Icons';
import { StyledAudioPlayer } from './AudioPlayer.styled';

export const AudioPlayer = ({ state }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef();
	const [duration, setDuration] = useState();
	const [currentTime, setCurrentTime] = useState();
	const [isMuted, setIsMuted] = useState(false);
	const currentPercentage = (currentTime / duration) * 100;
	const [clickedTime, setClickedTime] = useState();

	const handlePlayPause = () => {
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleMute = () => {
		setIsMuted(!isMuted);
	};

	const onLoadedMetadata = () => {
		setDuration(audioRef.current?.duration);
		setCurrentTime(audioRef.current?.currentTime);
	};
	const setAudioTime = () => setCurrentTime(audioRef.current?.currentTime);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

		const hours = Math.floor(minutes / 60);
		return `${hours}:${returnedMinutes}`;
	};
	useEffect(() => {
		audioRef.current?.addEventListener('timeupdate', setAudioTime);

		if (clickedTime && clickedTime !== currentTime) {
			audioRef.current.currentTime = clickedTime;
			setClickedTime(null);
		}
		return () => {
			audioRef.current?.removeEventListener('timeupdate', setAudioTime);
		};
	});
	return (
		<StyledAudioPlayer currentPercentage={currentPercentage}>
			<audio
				ref={audioRef}
				className='audio'
				preload='metadata'
				controlsList='nodownload noplaybackrate'
				onLoadedMetadata={onLoadedMetadata}
				src={state?.episode?.episodeUrl}
				muted={isMuted}
			></audio>

			<div className='panel'>
				<button onClick={handlePlayPause} className='btn'>
					{isPlaying ? <PauseIcon /> : <PlayIcon />}
				</button>
				<div className='progress'></div>
				<div>{audioRef.current && `${calculateTime(currentTime)}`} </div>
				<button onClick={handleMute} className='btn'>
					{isMuted ? <MuteIcon /> : <VolumeIcon />}
				</button>
			</div>
		</StyledAudioPlayer>
	);
};
