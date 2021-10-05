import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateProject from './pages/Projects/CreateProject';
import ProjectDetails from './pages/Projects/ProjectDetails';

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/projects/create" exact component={CreateProject} />
					<Route path="/projects/:id" exact component={ProjectDetails} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
