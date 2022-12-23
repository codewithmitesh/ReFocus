import React from 'react';
import Image from 'next/image';

const Login = () => {
	return (
		<div>
			<h1>Login form</h1>
			<form action='/api/login' method='post'>
				<label htmlFor=''>email:</label>
				<input
					type='email'
					name='email'
					placeholder='something@gmail.com'
				/>
				<label htmlFor=''>Password</label>
				<input type='password' name='password' placeholder='password' />
				<input type='submit' value='login' />
			</form>
		</div>
	);
};

export default Login;
