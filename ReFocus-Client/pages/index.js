import React from 'react';
import Link from 'next/link';

const index = () => {
	return (
		<div className="bg-[url('/assets/refocus-bg-2.jpeg')] w-[100vw] h-[100vh] bg-center flex justify-center items-start">
			<div className=' w-[32rem] h-[36rem] flex justify-start items-center flex-col  mr-10'>
				<h1 className='text-4xl font-bold mr-24 mt-28 text-white drop-shadow-2xl shadow-black'>
					ReFocus
				</h1>
				<h2 className='text-white mt-14 mr-10 opacity-90 font-semibold italic text-2xl'>
					"Making Virtual Education Easier"
				</h2>
			</div>
			<div className='flex flex-col'>
				<div className='w-[32rem] h-min  mr-7 flex justify-center  mt-16'>
					<Link href='/'>
						<h1 className='font-bold text-2xl mt-16 ml-5  mr-8 underline underline-offset-8 decoration-purple-800 decoration-4 cursor-pointer'>
							SIGN UP
						</h1>
					</Link>
					<Link href='/login'>
						<h1 className='font-bold text-2xl mt-16 mr-20  ml-8 cursor-pointer'>
							LOGIN
						</h1>
					</Link>
				</div>
				<div className=' w-[32rem] h-min flex justify-center mt-5'>
					<form
						action='/api/register'
						method='post'
						className='flex justify-center flex-col'>
						<input
							type='text'
							name='name'
							placeholder='Name'
							className='border-2 border-b-slate-400 rounded-sm mt-7 w-80 px-2'
						/>
						<input
							type='email'
							name='email'
							placeholder='Email'
							className='border-2 border-b-slate-400 rounded-sm mt-7 w-80 px-2'
						/>

						<input
							type='password'
							name='password'
							placeholder='Password'
							className='border-2 border-b-slate-400 rounded-sm mt-7 w-80 px-2'
						/>
						<div className='mt-5 flex flex-row justify-between mx-8 mb-3'>
							<div>
								<input
									type='radio'
									name='category'
									value='student'
									id='student'
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
								value='Register'
								className='bg-purple text-white text-xl border rounded-full cursor-pointer w-min px-5 py-1'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
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
