import React from 'react';
import { TbSpeakerphone } from 'react-icons/tb';
import {
	AiOutlineCalendar,
	AiOutlinePlusCircle,
	AiOutlineHome,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';

const studentSubscription = () => {
	return (
		<div className='bg-cyan w-full h-screen flex items-center justify-center'>
			<div className='bg-purple w-12 h-72 border rounded-full flex flex-col items-center justify-center translate-x-6'>
				<Link href='/studentHome'>
					<AiOutlineHome className='text-white text-3xl my-3 cursor-pointer font-bold' />
				</Link>
				<Link href='/studentCalendar'>
					<AiOutlineCalendar className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='/studentSubscription'>
					<AiOutlinePlusCircle className='text-white text-3xl my-3 cursor-pointer' />
				</Link>
				<Link href='studentAnnouncements'>
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
				{/* subscription */}
				<div className='flex flex-col justify-center items-center mt-10'>
					<h1 className='text-3xl font-bold'>
						SUBSCRIBE TO A CLASS FOR NOTIFICATIONS
					</h1>
					<form action='' className='flex flex-col mt-10'>
						<input
							type='email'
							name='email'
							placeholder='email'
							className='border border-gray-400 w-72 text-2xl px-2 py-1 rounded-md'
						/>
						<input
							type='text'
							name='classcode'
							placeholder='class code'
							className='border border-gray-400 w-72 text-2xl px-2 py-1 rounded-md my-10'
						/>
						<input
							type='submit'
							name='submit'
							value='Submit'
							className='bg-purple rounded-full text-white py-4 text-3xl cursor-pointer'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default studentSubscription;
