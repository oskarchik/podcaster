import Spinner from '../Spinner/Spinner';
import { StyledHeader } from './Header.styled';
import { useLoading } from '../../hooks/useLoading';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	const { isLoading } = useLoading();

	return (
		<StyledHeader>
			<NavLink to='/' className='logo'>
				Podcaster
			</NavLink>
			{isLoading ? <Spinner className='spinner'></Spinner> : null}
		</StyledHeader>
	);
};
