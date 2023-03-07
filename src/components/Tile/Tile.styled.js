import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTile = styled(Link)`
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
	.info-container {
		height: 20%;
		padding-top: 50%;
		text-align: center;
	}
	.name {
		font-size: 0.75rem;
	}
`;
