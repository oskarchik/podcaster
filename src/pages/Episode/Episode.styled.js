import styled from 'styled-components';

export const StyledEpisode = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 4rem;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0.5rem 1.5rem;

	.player-container {
		padding: 1rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

		.title {
			font-weight: var(--bold);
		}

		.audio {
			width: 100%;
			height: 1.75rem;
			margin-top: 0.5rem;
			border-radius: 0;
		}
		.audio::-webkit-media-controls-time-remaining-display {
			display: none;
		}
		.audio::-webkit-media-controls-panel {
			border-radius: 0px;
		}
		.audio::-webkit-media-controls-play-button {
			color: white;
		}
	}
	.player-container > * {
		margin-bottom: 0.75rem;
	}
`;
