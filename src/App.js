import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" exact>
						<Dashboard />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
