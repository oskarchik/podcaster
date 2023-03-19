import styled from 'styled-components';

export const StyledHeader = styled.header`
	max-width: 1200px;
	margin: 0.75rem auto;
	height: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 0.5rem;
  border-bottom: 2px solid var(--borders);
	color: var(--accent);
	font-size: 1.5rem;
	font-weight: var(--bold);
	.logo {
		text-decoration: none;
		color: var(--accent);
	}
`;
