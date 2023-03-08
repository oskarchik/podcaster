import styled from 'styled-components';

export const StyledTable = styled.table`
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-collapse: collapse;
	border-spacing: 1rem;
	th,
	td {
		padding: 1rem;
	}
	.head-row th {
		border-bottom: 1px solid black;
	}
	.table-head .cell {
		text-align: left;
	}
	.table-body tr:nth-child(odd) {
		background-color: var(--lightgrey);
	}

	.link {
		text-decoration: none;
	}

	.cell {
		${'' /* border: 1px solid black; */}
	}
`;
