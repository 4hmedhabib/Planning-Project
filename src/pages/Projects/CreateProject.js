import { useState } from 'react';

const CreateProject = () => {
	const [ value, setValue ] = useState({
		title: '',
		content: ''
	});

	const handleChange = (e) => {
		setValue((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
	};

	return (
		<div className="container">
			<form className="white" onSubmit={handleSubmit}>
				<h5 className="grey-text text-darken-3 ">Create Project</h5>
				<div className="input-field">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="title" onChange={handleChange} email={value.title} />
				</div>
				<div className="input-field">
					<label htmlFor="content">Content</label>
					<textarea
						name="content"
						id="content"
						onChange={handleChange}
						value={value.content}
						className=" materialize-textarea"
					/>
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Create</button>
				</div>
			</form>
		</div>
	);
};

export default CreateProject;
