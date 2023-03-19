import styled from 'styled-components';

export const StyledAudioPlayer = styled.div`
	.panel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #44433f;
		gap: 8px;
		color: white;
		padding: 0.25rem 0;
		border-radius: 4px;
		.progress {
			width: 100%;
			height: 8px;
			background: linear-gradient(
				to right,
				var(--white) ${(props) => props.currentPercentage}%,
				var(--black) 0
			);
			border-radius: 4px;
		}
		.btn {
			display: flex;
			align-items: center;
			border-radius: 4px;
			border: none;
			background-color: #44433f;
			color: white;
			cursor: pointer;
		}
	}
`;
