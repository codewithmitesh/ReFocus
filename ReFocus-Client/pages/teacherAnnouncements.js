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
import Announcements from '../components/Announcements';

const teacherAnnouncements = () => {
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
				<div className='flex  justify-center mt-5'>
					<h1 className='text-3xl font-bold'>ANNOUNCEMENTS</h1>
				</div>
				<div className='flex justify-between  mt-4'>
					<div className='w-2/3 overflow-auto h-80'>
						<Announcements />
						<Announcements />
						<Announcements />
						<Announcements />
					</div>
					<div className='flex mr-24 mt-10'>
						<form action='' className='flex flex-col '>
							<input
								type='title'
								name='title'
								placeholder='TITLE'
								className='w-full border border-gray-500 px-2 rounded-sm'
							/>
							<input
								type='text'
								name='classcode'
								placeholder='CLASS CODE'
								className='w-full border border-gray-500 mt-2 px-2 rounded-sm'
							/>
							<input
								type='text'
								name='body'
								placeholder='BODY...'
								className='w-full border  border-gray-500 mt-2 h-32 px-2 rounded-sm'
							/>
							<input
								type='submit'
								name='submit'
								value='submit'
								className='bg-purple mt-4 border rounded-full p-2 text-white cursor-pointer'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default teacherAnnouncements;
