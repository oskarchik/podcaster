import styled from 'styled-components';

export const StyledSpinner = styled.div`
	.loading-spinner {
		width: 1.5rem;
		height: 1.5rem;
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: var(--accent);
		border-radius: 50%;
		cursor: none;
		animation: spinner 1s ease infinite;
	}
	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
