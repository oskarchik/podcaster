import Spinner from '../Spinner/Spinner';
import { StyledHeader } from './Header.styled';
import { useLoading } from '../../hooks/useLoading';

export const Header = () => {
	const { isLoading } = useLoading();

	return (
		<StyledHeader>
			<div className='logo'>Podcaster</div>
			{isLoading ? <Spinner className='spinner'></Spinner> : null}
		</StyledHeader>
	);
};
