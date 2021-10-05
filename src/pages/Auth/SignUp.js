import { useState } from 'react';

const SignUp = () => {
	const [ value, setValue ] = useState({
		email: '',
		password: '',
		firstname: '',
		lastname: ''
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
				<h5 className="grey-text text-darken-3 ">Sign up</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={handleChange}
						email={value.email}
						autocomplete="off"
					/>
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						value={value.password}
						autocomplete="off"
					/>
				</div>
				<div className="input-field">
					<label htmlFor="firstname">First Name</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						onChange={handleChange}
						value={value.firstname}
						autocomplete="off"
					/>
				</div>
				<div className="input-field">
					<label htmlFor="lastname">Last Name</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						onChange={handleChange}
						value={value.lastname}
						autocomplete="off"
					/>
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Signup</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
