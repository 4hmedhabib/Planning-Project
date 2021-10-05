import { useState } from 'react';

const SignUp = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ firstname, setFirstname ] = useState('');
	const [ lastname, setLastname ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
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
						onChange={(e) => setEmail(e.target.value)}
						email={email}
						autocomplete="off"
					/>
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						autocomplete="off"
					/>
				</div>
				<div className="input-field">
					<label htmlFor="firstname">First Name</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						onChange={(e) => setFirstname(e.target.value)}
						value={firstname}
						autocomplete="off"
					/>
				</div>
				<div className="input-field">
					<label htmlFor="lastname">Last Name</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						onChange={(e) => setLastname(e.target.value)}
						value={lastname}
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
