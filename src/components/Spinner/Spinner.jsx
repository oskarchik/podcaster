import { StyledSpinner } from './Spinner.styled';

const Spinner = () => {
	return (
		<StyledSpinner className='spinner'>
			<div className='loading-spinner'></div>
		</StyledSpinner>
	);
};

export default Spinner;
