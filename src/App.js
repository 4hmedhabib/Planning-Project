import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import SignIn from './pages/Auth/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import ProjectDetails from './pages/Projects/ProjectDetails';

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/projects/:id" component={ProjectDetails} />
					<Route path="/signin" component={SignIn} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
