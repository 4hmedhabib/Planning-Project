import { useState } from 'react';

const SignUp = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

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
						type="text"
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
					<button className="btn pink lighten-1 z-depth-0">Signup</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
