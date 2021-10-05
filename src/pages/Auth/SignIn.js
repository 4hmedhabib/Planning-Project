import { useState } from 'react';

const SignIn = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<form className="white" onSubmit={handleSubmit}>
				<h5 className="grey-text text-darken-3 ">Sign In</h5>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
						email={email}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
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
