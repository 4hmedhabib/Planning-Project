import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<Fragment>
			<li>
				<NavLink to="/signin">Login</NavLink>
			</li>
			<li>
				<NavLink to="/signup">Singup</NavLink>
			</li>
		</Fragment>
	);
};

export default SignedOutLinks;
