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
		background-color: #267cbc;
		color: #fff;
	}
	.search-input {
		width: 400px;
		height: 2rem;
		border: 2px solid #dcdcdc;
		border-radius: 4px;
	}
	.search-input::placeholder {
		padding: 0.75rem;
		color: #c6c6c6;
	}
`;
