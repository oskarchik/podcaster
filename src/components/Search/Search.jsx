import { StyledSearch } from './Search.styled';

export const Search = ({ count, query, setQuery }) => {
	function handleChange(e) {
		setQuery(e.target.value);
	}
	return (
		<StyledSearch className='search'>
			<span className='search-count'>{count}</span>
			<input
				onChange={(e) => handleChange(e)}
				className='search-input'
				value={query}
				type='text'
				placeholder='Filter podcasts...'
			/>
		</StyledSearch>
	);
};
