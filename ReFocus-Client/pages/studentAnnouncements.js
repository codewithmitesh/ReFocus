import React from 'react';
import { TbSpeakerphone } from 'react-icons/tb';
import {
	AiOutlineCalendar,
	AiOutlinePlusCircle,
	AiOutlineHome,
	AiFillPushpin,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';

const studentAnnouncements = () => {
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
					<div className='ml-20 mt-8  h-min'>
						<h1 className='font-bold text-2xl'>ReFocus</h1>
					</div>
					<div className='flex justify-around h-min items-center mt-8 mr-20'>
						<h1 className='mx-3 cursor-pointer hover:text-purple-900 transition-transform'>
							home
						</h1>
						<Link href='/kanban'>
							<h1 className='mx-3 cursor-pointer'>kanban</h1>
						</Link>
						<h1 className='mx-3 cursor-pointer hover:text-purple-900 transition-transform'>
							profile
						</h1>
						<div className='mx-3'>
							<HiMenuAlt2 className='text-2xl cursor-pointer' />
						</div>
					</div>
				</div>
				<div>
					<h1>Announcements</h1>
				</div>
			</div>
		</div>
	);
};

export default studentAnnouncements;
