import React from 'react';
import Link from 'next/link';
import { TbSpeakerphone } from 'react-icons/tb';
import {
	AiOutlineCalendar,
	AiOutlinePlusCircle,
	AiOutlineHome,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import Iframe from 'react-iframe';

const teacherSubscription = () => {
	return (
		<div className='bg-cyan w-full h-screen flex items-center justify-center'>
			<div className='bg-purple w-12 h-72 border rounded-full flex flex-col items-center justify-center translate-x-6'>
				<Link href='/teacherHome'>
					<AiOutlineHome className='text-white text-3xl my-3 cursor-pointer font-bold' />
				</Link>
				<Link href='/teacherCalendar'>
					<AiOutlineCalendar className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/teacherSubscription'>
					<AiOutlinePlusCircle className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='teacherAnnouncements'>
					<TbSpeakerphone className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/login'>
					<BiLogOut className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
			</div>
			{/* Sidebar */}
			<div className='h-3/4 w-3/4 bg-white shadow-xl border rounded-lg flex flex-col'>
				<div className='flex flex-row justify-between h-min'>
					<div className='ml-16 mt-8  h-min'>
						<h1 className='font-bold text-2xl'>ReFocus</h1>
					</div>
					<div className='flex justify-around  h-min items-center mt-8 mr-8'>
						<h1 className='mx-3 cursor-pointer'>home</h1>
						<Link href='/kanban'>
							<h1 className='mx-3 cursor-pointer'>kanban</h1>
						</Link>
						<Link href='/teacherExport'>
							<h1 className='mx-3 cursor-pointer'>export</h1>
						</Link>
						<div className='mx-3 cursor-pointer'>
							<HiMenuAlt2 className='text-2xl' />
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center mt-10'>
					<form action='/api/getData' method='post'>
						<input
							type='text'
							name='meetcode'
							placeholder='Enter meet code'
							className=' border-2 border-b-slate-400 text-center rounded-md w-64'
						/>
						<div className='flex items-center justify-center'>
							<input
								type='submit'
								value='Submit'
								className='bg-purple text-white text-2xl px-4 rounded-full mt-4'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default teacherSubscription;

{
	/* <div className='h-screen bg-cyan'>
			<div className='flex justify-center items-center'>
				<form action='/api/getData' method='get'>
					<input
						type='text'
						placeholder='Enter meet code'
						className='border border-gray-400'
					/>
					<input
						type='submit'
						value='submit'
						className='bg-purple text-white border rounded-full px-2'
					/>
				</form>
			</div>
		</div> */
}
