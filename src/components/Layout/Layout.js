import { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
	return (
		<div>
			<Fragment>
				<Navbar />
				{props.children}
			</Fragment>
		</div>
	);
};

export default Layout;
