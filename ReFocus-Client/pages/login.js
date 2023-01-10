import React from 'react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react'
// import { axios } from '../apis/axios';
const LOGIN_URL = '/user/login';
import axios from 'axios';
import TeacherHome from './teacherHome';


const index = () => {

	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)
	const [teacheer, setTeacher] = useState(true)
	const [data, setData] = useState([]);
	// useEffect(() => {
	// 	userRef.current.focus();
	// }, []);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd]);

	const handleSubmit = async (e) => {

		e.preventDefault();

		try {
			console.log("query fired" + user + pwd)
			const response = await axios.post('http://localhost:8000/user/login',
				JSON.stringify({ email: user, password: pwd }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true
				}
			);
			// console.log("Runed")

			console.log(response.data);
			setData(response.data);

			// console.log("And the Data is " + data)

			if (response.data.category !== "Student") {
				setTeacher(true);
			}
			//handle coockie here
			// const accessToken = response?.data?.accessToken;
			// roles for authorization
			// const roles = response?.data?.roles;
			/// setting global auth for future
			// setAuth({ user, pwd, roles, accessToken });
			setUser('');
			setPwd('');
			if (response?.status !== 200) {
				// setErrMsg(response.data.message);
				setSuccess(false);
			} else {
				setSuccess(true);
			}
		} catch (err) {
			if (!err?.response) {
				console.log('No Server Response');
			} else if (err.response?.status === 400) {
				console.log('Missing Username or Password');
			} else if (err.response?.status === 401) {
				console.log('Unauthorized');
			} else {
				console.log('Login Failed');
			}
			// errRef.current.focus();
		}
	}


	// Write a Code for Error Message here 
	// <p ref={errRef} className={errMsg ? "" : ""} aria-live="assertive" > {errMsg}</p >

	return (
		<>
			{success ? (

				// <h1>dfsdf</h1>
				<TeacherHome />
				// teacherHome()
			) : (
				<div className="bg-[url('/assets/refocus-bg-2.jpeg')] w-[100vw] h-[100vh] bg-center flex justify-center items-start ">
					<div className=' w-[32rem] h-[36rem] flex justify-start ml-16 flex-col'>
						<h1 className='text-4xl ml-28 font-bold mr-24 mt-28 text-white drop-shadow-2xl shadow-black'>
							ReFocus
						</h1>
						<h2 className='text-white mt-14 mr-10 opacity-90 font-semibold italic text-2xl'>
							"Welcome to Login"
						</h2>
					</div >
					<div className='flex flex-col'>
						<div className='w-[32rem] h-min  mr-7 flex justify-center  mt-16'>
							<Link href='/'>
								<h1 className='font-bold text-2xl mt-16 ml-5  mr-8   cursor-pointer'>
									SIGN UP
								</h1>
							</Link>
							<Link href='/login'>
								<h1 className='font-bold text-2xl mt-16 mr-20  ml-8 cursor-pointer underline underline-offset-8 decoration-purple-800 decoration-4'>
									LOGIN
								</h1>
							</Link>
						</div>
						<div className=' w-[32rem] h-min flex justify-center mt-5'>
							<form
								onSubmit={handleSubmit}
								className='flex justify-center flex-col'>
								<input
									type='email'
									name='email'
									placeholder='Email'
									className='border-2 border-b-slate-400 rounded-sm mt-7 w-80 px-2'
									ref={userRef}
									autoComplete='off'
									value={user}
									onChange={(e) => setUser(e.target.value)}
									required
								/>
								<input
									type='password'
									name='password'
									placeholder='Password'
									className='border-2 border-b-slate-400 rounded-sm mt-7 w-80 px-2'
									value={pwd}
									onChange={(e) => setPwd(e.target.value)}
									required
								/>
								<div className='flex justify-between mx-8 mt-8 mb-3'>
									<div>
										<input
											type='radio'
											name='category'
											value='student'
											id='student'
											// onChange={ }
											className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										/>
										<label
											htmlFor='student'
											className='ml-2 font-medium text-gray-900 opacity-75 text-xl'>
											Student
										</label>
									</div>
									<div>
										<input
											type='radio'
											name='category'
											value='teacher'
											id='teacher'
											className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
										/>
										<label
											htmlFor='teacher'
											className='ml-2 opacity-75 font-medium text-gray-900 text-xl'>
											Teacher
										</label>
									</div>
								</div>
								<div className='flex items-center justify-center'>
									<input
										type='submit'
										value='Login'
										className='bg-purple text-white text-xl border rounded-full cursor-pointer w-min px-7 py-2 mt-3 mr-8'

									/>
								</div>
							</form>
						</div>
					</div>
				</div >
			)
			}
		</>
	);
};

export default index;

{
	/* <h1 className='text-blue-600 text-2xl'>Welcome!!</h1>
			<div>
				<Link href='/login'>
					<button>Login</button>
				</Link>
				<Link href='/register'>
					<button>Register</button>
				</Link>
			</div> */
}
