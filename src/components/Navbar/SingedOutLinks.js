import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<Fragment>
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
			<li>
				<NavLink to="/signup">Singup</NavLink>
			</li>
		</Fragment>
	);
};

export default SignedOutLinks;
