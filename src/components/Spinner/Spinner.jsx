import { StyledSpinner } from './Spinner.styled';

export const Spinner = () => {
	return (
		<StyledSpinner className='spinner'>
			<div className='loading-spinner'></div>
		</StyledSpinner>
	);
};
