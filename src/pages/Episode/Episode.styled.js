import styled from 'styled-components';

export const StyledEpisode = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 4rem;
	max-width: 1200px;
	padding: 0 1.5rem;

	.player-container {
		padding: 1rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		width: 100%;

		.title {
			font-weight: var(--bold);
		}
	}
	.player-container > * {
		margin-bottom: 0.75rem;
	}
`;
