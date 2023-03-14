import styled from 'styled-components';

export const StyledAside = styled.aside`
	display: flex;
	flex-direction: column;
	width: 300px;
	padding: 0 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	.container {
		margin: 0 auto;
		padding: 1.1rem 0;

		.author {
			margin: 0;
		}
	}
	.link {
		text-decoration: none;
		color: var(--black);
	}
	.image {
		margin: 0 auto;
		border-radius: 0.25rem;
	}
	.container-image {
		width: 75%;
	}

	.container-title {
		width: 80%;
		padding: 0 0.75rem;
	}
	.container-description {
		padding: 1rem 0.25rem;
	}
	.line {
		border: 1px solid var(--lightgrey);
		width: 100%;
	}
	.author,
	.description-text {
		font-size: 0.75rem;
		font-style: italic;
	}
`;
