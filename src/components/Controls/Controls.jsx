import { useRef } from 'react';

import { PlayIcon, PauseIcon, VolumeIcon, MuteIcon } from '../../components/Icons/Icons';

import { StyledControls } from './Controls.styled';

import { calculateTime } from '../../utils/calculateTime';

export const Controls = ({
	audioRef,
	handleMute,
	handlePlayPause,
	isMuted,
	isPlaying,
	currentTime,
	currentPercentage,
}) => {
	const clickRef = useRef();
	const checkDuration = (e) => {
		const width = clickRef.current.clientWidth;
		const offset = e.nativeEvent.offsetX;
		const progress = (offset / width) * 100;

		audioRef.current.currentTime = (progress / 100) * audioRef.current.duration;
	};
	return (
		<>
			{audioRef.current && (
				<StyledControls currentPercentage={currentPercentage}>
					<button onClick={handlePlayPause} className='btn'>
						{isPlaying ? <PauseIcon /> : <PlayIcon />}
					</button>
					{/* <div  className='progress-container' > */}
					<div
						className='progress'
						style={{
							background: `linear-gradient(to right, white ${currentPercentage}%, black 0)`,
						}}
						onClick={checkDuration}
						ref={clickRef}
					></div>
					{/* </div> */}
					<div>{calculateTime(currentTime)}</div>
					<button onClick={handleMute} className='btn'>
						{isMuted ? <MuteIcon /> : <VolumeIcon />}
					</button>
				</StyledControls>
			)}
		</>
	);
};
