import React from 'react';
import { StyledSearch } from './SearchStyled';

export const Search = ({ podcasts }) => {
	return (
		<StyledSearch className='search'>
			<span className='search-count'>{podcasts?.length}</span>
			<input className='search-input' type='text' placeholder='Filter podcasts...' />
		</StyledSearch>
	);
};
