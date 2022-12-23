import React from 'react';
import Link from 'next/link';

const index = () => {
	return (
		<div className="bg-[url('/assets/refocus-bg-2.jpeg')] w-[100vw] h-[100vh] bg-center flex justify-center items-start">
			<div className=' w-[32rem] h-[36rem] flex justify-center'>
				<h1 className='text-4xl italic font-bold mr-24 mt-28 text-white drop-shadow-2xl shadow-black'>
					ReFocus
				</h1>
			</div>
			<div className='flex flex-col'>
				<div className='w-[32rem] h-min  mr-7 flex justify-center  mt-16'>
					<Link href='/'>
						<h1 className='font-bold text-2xl mt-16 ml-5 italic mr-8 underline underline-offset-8 decoration-purple-800 decoration-4 cursor-pointer'>
							SIGN UP
						</h1>
					</Link>
					<Link href='/login'>
						<h1 className='font-bold text-2xl mt-16 mr-20 italic ml-8 cursor-pointer'>
							LOGIN
						</h1>
					</Link>
				</div>
				<div className=' w-[32rem] h-min flex justify-center mt-5'>
					<form action='' className='flex justify-center flex-col'>
						<input
							type='name'
							name='name'
							placeholder='Name'
							className='border-2 border-b-slate-400 rounded-sm mt-10 w-72'
						/>
						<input
							type='email'
							name='email'
							placeholder='email'
							className='border-2 border-b-slate-400 rounded-sm mt-10 w-72'
						/>
						<input
							type='password'
							name='password'
							placeholder='Password'
							className='border-2 border-b-slate-400 rounded-sm mt-10 w-72'
						/>
					</form>
				</div>
				<div className='w-[32rem]  h-min flex justify-center mt-5'>
					<Link href='/login'>
						<button className='bg-purple text-white px-4 py-1 border-0 rounded-full text-xl'>
							Sign Up
						</button>
					</Link>
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
