import styled from 'styled-components';

export const StyledHome = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	.search {
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
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, 16rem);
		gap: 12rem 0.75rem;
		justify-content: space-between;
		align-items: flex-start;
		height: auto;

		.card {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: end;
			align-items: center;
			width: 16rem;
			min-height: 8rem;
			padding: 0 0.25rem 0.5rem;
			border-radius: 0.25rem;
			color: black;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			text-decoration: none;

			.cover-container {
				position: absolute;
				top: -54px;
				display: flex;
				align-items: center;
				width: 10rem;
				height: 10rem;
				border-radius: 50%;
				.cover-image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					object-fit: cover;
				}
			}
			.card-text {
				height: 20%;
				padding-top: 50%;
				text-align: center;
			}
			.card-name {
				font-size: 0.75rem;
			}
		}
	}
`;
