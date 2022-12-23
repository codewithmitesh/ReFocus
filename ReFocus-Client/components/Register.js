import React from 'react';

const Register = () => {
	return (
		<div>
			<h1>Registration form</h1>
			<form action='/api/register' method='post'>
				<label htmlFor=''>email:</label>
				<input
					type='email'
					name='email'
					placeholder='something@gmail.com'
				/>
				<label htmlFor=''>Password</label>
				<input type='password' name='password' placeholder='password' />
				{/* <input type='radio' value='student' name='category' />
				<input type='radio' value='teacher' name='category' /> */}
				<input type='submit' value='register' />
			</form>
		</div>
	);
};

export default Register;
