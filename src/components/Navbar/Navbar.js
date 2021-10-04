import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SingedOutLinks';

const Navbar = () => {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">
					HabibPlan
				</Link>
				<ul className="right">
					<SignedOutLinks />
					<SignedInLinks />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
