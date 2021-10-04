import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return (
		<Fragment>
			<li>
				<NavLink to="/projects/create">New Project</NavLink>
			</li>
			<li>
				<NavLink to="/logout">Log Out</NavLink>
			</li>
			<li>
				<NavLink to="/profiles" className="btn btn-floating pink lighten-1">
					NN
				</NavLink>
			</li>
		</Fragment>
	);
};

export default SignedInLinks;
