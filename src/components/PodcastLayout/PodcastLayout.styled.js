import styled from 'styled-components';

export const StyledPodcastLayout = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 4rem;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0.5rem 1.5rem;
	.aside {
		width: 300px;
	}
	.outlet {
		width: 100%;
	}
	@media (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
`;
