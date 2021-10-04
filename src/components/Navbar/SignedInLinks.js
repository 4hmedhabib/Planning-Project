import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return (
		<ul className="right">
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
		</ul>
	);
};

export default SignedInLinks;
