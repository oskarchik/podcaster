import styled from 'styled-components';

export const StyledSearch = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	gap: 12px;
	margin-bottom: 6rem;
	.search-count {
		padding: 1px;
		border-radius: 8px;
		background-color: var(--accent);
		color: var(--white);
		font-weight: var(--bold);
	}
	.search-input {
		width: 400px;
		height: 2rem;
		border: 2px solid var(--borders);
		border-radius: 4px;
	}
	.search-input::placeholder {
		padding: 0.75rem;
		color: var(--placeholders);
	}
`;
