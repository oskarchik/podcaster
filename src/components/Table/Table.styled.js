import styled from 'styled-components';

export const StyledTable = styled.table`
	border-collapse: collapse;
	border-spacing: 1rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	.table-head,
	.table-body {
		padding: 1rem;
	}
	.head-row .cell {
		border-bottom: 1px solid black;
	}
	.table-head .cell {
		text-align: left;
	}
	.table-body .body-row:nth-child(odd) {
		background-color: var(--lightgrey);
	}
	.link {
		text-decoration: none;
	}
`;
