import styled from 'styled-components';

export const StyledPodcast = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 4rem;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0.5rem 1.5rem;

	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		row-gap: 1rem;

		.title {
			padding: 0.5rem;
			font-weight: var(--bold);
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		}
		.table {
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
		}
	}
	@media (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
`;
