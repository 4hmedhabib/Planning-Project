import Notification from '../../components/Notification/Notification';
import ProjectList from '../../components/Projects/ProjectList';
import { connect } from 'react-redux';

const Dashboard = (props) => {
	const { projects } = props;
	return (
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6">
					<ProjectList projects={projects} />
				</div>
				<div className="col s12 m5 offset-m1">
					<Notification />
				</div>
			</div>
		</div>
	);
};

const mapStateProps = (state) => {
	return {
		projects: state.project.projects
	};
};

export default connect(mapStateProps)(Dashboard);
