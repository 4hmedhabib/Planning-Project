import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import ProjectDetails from './pages/Projects/ProjectDetails';

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/projects/:id" exact component={ProjectDetails} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
