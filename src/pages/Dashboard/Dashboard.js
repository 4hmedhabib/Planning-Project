import Notification from '../../components/Notification/Notification';
import ProjectList from '../../components/Projects/ProjectList';

const Dashboard = () => {
	console.log('running');

	return (
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">
					<ProjectList />
					{console.log('running')}
				</div>
				<div className="col s12 m5 offset-m1">
					<Notification />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
