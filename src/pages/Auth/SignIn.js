import { useState } from 'react';

const SignIn = () => {
	const [ value, setValue ] = useState({
		email: '',
		password: ''
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
				<h5 className="grey-text text-darken-3 ">Sign In</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email" onChange={handleChange} email={value.email} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						value={value.password}
					/>
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Login</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
